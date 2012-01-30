var SaboteurServer = Saboteur.extend({
  init    : function(io, protocol) {
    this._super();
    this.io           = io;
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
  
  broadcastStartGame : function() {
    console.log(this.playerList);
    for (var i in this.playerList) {
      console.log(i, this.playerList[i]);
      this.resetClientState(i);
    };
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
    console.log(data);
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
  
  // -- STATE
  getGameState : function(playerID) {
    // public info on all people
    var players = this.each(this.players, function(k, v) { return { public : v.public}});
    // private info on you
    players[playerID].private = this.players[playerID].private; 
    var state = {
      map     : this.map,
      players : players
    };
    
    return state;
  },
  
  resolveError : function(playerID, data) {
    var event = Protocol.createEvent('result', 'client', 'custom', {
      state : Protocol.state.ERROR
    });
    
    var event = U.extend(event.data[Protocol.state.ERROR], this.getGameState(playerID));
    U.extend(event.data[Protocol.state.ERROR], data);
    this.playerList[playerID].socket.emit('result', event.data);
  },
  
  resolveCorrect : function(playerID, data) {
    var event = Protocol.createEvent('result', 'client', 'custom', {
      state : Protocol.state.CORRECT
    });
    U.extend(event.data[Protocol.state.CORRECT], data);
    this.playerList[playerID].socket.emit('result', event.data);
  },
  
  updateClientState : function(playerID) {
    // TODO: think about it...
  },
  
  resetClientState : function(playerID) {
    var event = Protocol.createEvent('reset', 'client', 'custom', this.getGameState(playerID));
    this.playerList[playerID].socket.emit('reset', event.data);
  }
});
