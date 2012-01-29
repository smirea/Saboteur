var SaboteurServer = Saboteur.extend({
  init    : function(io, protocol) {
    this._super();
    this.io           = io;
    this.protocol     = protocol;
    this.map = {};
    this.roleDeck = [];
    this.gameDeck = [];
    this.playerList   = {};
  },
  
  setupGame : function() {
    var i = -1;
    while (++i < this.factory.size('role')) {
      this.roleDeck[i] = i;
    };
    
    i = -1;
    while (++i < this.factory.size('game')) {
      this.gameDeck[i] = i;
    };
    
    this.roleDeck = this.shuffle(this.roleDeck);
    this.gameDeck = this.shuffle(this.gameDeck);

    var names = [];
    for (var n in this.playerList) {
      names[n] = this.playerList[n].name;
    };
    this.players = this.createPlayers( names);
    // give out roles
    this.assignRoles( this.players );
    
    // give out cards
    this.assignCards( this.players, this.opt.initialCards );
    
    // pre-discard the set amout of cards
    this.discardFromGameDeck( this.gameDeck, this.opt.discardCards );
  },
  
   /**
   * Assigns a role to each player
   * @param {Array} players  Array of S.Player objects to assign them roles
   */
  assignRoles : function( players){
    for( var i in players ){
      players[i].private.roleCard = this.drawCard( this.roleDeck);
    };
  },
  
  /**
   * Assign the default number of starting cards to each player
   * @param {Array} players  Array of S.Player objects to assign them cards
   * @param {Int} cards  Number of cards to assign
   */
  assignCards : function( players, cards ){
    for( var i in players ){
      for( var j = 1; j<=cards; ++j ){
        players[i].private.cards.push( this.drawCard( this.gameDeck ) );
      };
    };
  },
  
  /**
   * Generates the list of player objects from opt.players into players
   * @param {Array} players  Array of player names
   * @return {Array}  A list of S.Player classes
   */
  createPlayers : function( players ){
    var team = {};
    for( var i in players ){
      team[i] = new S.Player( players[i] );
    };
    return team;
  },
  
  /**
   * Randomizes the elements in the array
   * @param {Array} arr
   */
  shuffle : (function(){
    function randomSort(){ return Math.floor( Math.random()*3 )-1; };
    return function( arr ){
      return arr.sort( randomSort );
    }
  })(),
  
  /**
   * Given a deck a card, returns the top card and removes it from the deck;
   * @param {Array} deck  an array for the indexess of the deck of cards
   */
  drawCard : function( indexes ){
    return indexes.pop();
  },
  
  /**
   * Discards cards from the top of the deck
   * @param {Array} deck  The deck to draw from
   * @return {Int} number The number of cards left
   */
  discardFromGameDeck : function( deck, number ){
    deck = deck || this.gameDeck;
    for( var i=0; i<number; ++i ){
      deck.pop();
    }
    return deck.length;
  },
  
  // HANDLERS
  handleDiscard : function(data) {
    if (this.doDiscard(data.playerID, data.cards)) {
      var newcards = this.refillCards(data.playerID, data.cards);
      var extra = { newcards : newcards };
      this.resolveCorrect(data.playerID, extra);
    } else {
      this.resolveError(data.playerID);
    }
  },
  
  handleTargetPublicPerson : function(data) {
    if (this.doTargetPublicPerson(true, data.playerID, data.cardID, data.targetID, data.targetCardID)) {
      this.doTargetPublicPerson(false, data.playerID, data.cardID, data.targetID, data.targetCardID)
      this.resolveCorrect(data.playerID);
    } else {
      this.resolveError(data.playerID);
    }
  },
  
  handleTargetPrivatePerson : function(data) {
    if (this.doTargetPrivatePerson(true, data.playerID, data.cardID, data.targetID)) {
      if (null == this.doTargetPrivatePerson(false, data.playerID, data.cardID, data.targetID)) {
        var player = this.players[data.playerID];
        var card = player.private.cards[data.cardID];
        var target = this.players[data.targetID];
        switch(card._className) {
        case 'Inspection':
          var extra = {
            roleCard : target.private.roleCard.id
          };
          this.resolveCorrect(data.playerID, extra);
          break;
        case 'SwapHand':
          var pos = player.private.getCardPosition(data.cardID);
          player.private.cards.splice(pos, 1);
          var temp = player.private.cards;
          player.private.cards = target.private.cards;
          target.private.cards = temp;
          var newcards = this.refillCards(data.playerID, [pos]);
          var extra = { newcards : newcards };
          this.resolveCorrect(data.playerID, extra);
          break;
        case 'SwapHats':
          // TODO: what if no more roles left...
          var newRole = this.drawCard(this.roleDeck);
          target.private.roleCard = newRole;
          var extra = {
            roleCard : newRole
          };
          this.resolveCorrect(data.targetID);
          this.updateClientState(data.targetID, extra);
          break;
        default:
          throw new Error('Unexpected card played', card._className, card.id);
          break;
        }
        this.resolveCorrect(playerID);
      } else {
        this.resolveError(playerID);
      }
    } else {
      this.resolveError(playerID);
    }
  },
  
  handleTargetMap : function(playerID, cardID, posx, posy) {
    if (this.doTargetMap(playerID, cardID, posx, posy)) {
      this.resolveCorrect(playerID);
    } else {
      this.resolveError(playerID);
    }
  },
  
  handleHeal : function(playerID, cards, target) {
    if (this.doHeal(playerID, cards, target)) {
      this.resolveCorrect(playerID);
    } else {
      this.resolveError(playerID);
    }
  },
  
  // HELPERS
  
  each : function(object, callback) {
    object = U.extend(true, {}, object);
    for (var i in object) {
      object[i] = callback(i, object[i]);
    }
    
    return object;
  },
  
  // -- STATE
  resolveError : function(playerID, data) {
    var players = this.each(this.players, function(k, v) { return { public : v.public}});
    var state = {
      state : this.protocol.state.ERROR,
      map     : this.map,
      players : players
    };
    this.playerList[playerID].socket.emit('result', U.extend(state, data));
  },
  
  resolveCorrect : function(playerID, data) {
    var state = {
      state : this.protocol.state.CORRECT
    };
    this.playerList[playerID].socket.emit('result', U.extend(state, data));
  },
  
  updateClientState : function(playerID) {
    
  },
  
  resetClientState : function(playerID) {
    // broadcast
    // TODO: decide on protocol ... mb just broadcast changes?
    var state = {
      map     : this.map,
      players : this.players.public
    };
    this.playerList[playerID].socket.json.emit('reset', state);
  },
  
  // --CARDS
  refillCards : function(playerID, cardPositions) {
    var ret = {};
    if ((this.factory.size('game') == 0) && 
      (this.players[playerID].private.cards.length - cardPositions.length < 0)) 
    {
      this.compactCards(playerID);
    } else {
      ret = this.replenishCards(playerID, cardPositions);
    };
    
    return ret;    
  },
  
  replenishCards : function(playerID, cardPositions) {
    var ret = {};
    for (var i in cardPositions) {
      this.players[playerID].private.cards[i] = this.drawCard(this.gameDeck);
      ret[cardPositions[i]] = this.players[playerID].private.cards[i];
    };
    
    // in case you couldn't draw enough
    this.compactCards(playerID);
    return ret;
  },
  
  compactCards : function(playerID) {
    var newcards = [];
    var player = this.players[playerID];
    for (var i in player.private.cards) {
      var card = player.private.cards[i];
      if (card) {
        newcards.push(card);
      };
    };
    
    player.private.cards = newcards;
  }
});
