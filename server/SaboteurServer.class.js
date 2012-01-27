var SaboteurServer = Saboteur.extend({
  init    : function(io, protocol) {
    this._super();
    this.io           = io;
    this.protocol     = protocol;
    this.roleDeck = [];
    this.gameDeck = [];
    this.playerList   = {};
  },
  
  setupGame : function() {
    var i = -1;
    while (++i < this.roleList.length) {
      this.roleDeck[i] = i;
    };
    
    i = -1;
    while (++i < this.gameList.length) {
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
    this.assignCards( this.com.players, this.com.opt.initialCards );
    
    // pre-discard the set amout of cards
    this.discardFromGameDeck( this.gameDeck, this.opt.discardCards );
  },
  
   /**
   * Assigns a role to each player
   * @param {Array} players  Array of S.Player objects to assign them roles
   */
  assignRoles : function( players){
    for( var i in players ){
      players[i].roleCard = this.drawCard( this.roleDeck, this.roleList );
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
        players[i].cards.push( this.drawCard( this.gameDeck, this.gameList ) );
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
   * @param {Array} deck  the deck of cards
   */
  drawCard : function( indexes, deck ){
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
  
  handleDiscard : function(playerID, cards) {
    if (this.doDiscard(playerID, cards)) {
      var newcards = this.refillCards(playerID, cards);
      this.resolveCorrect(playerID, {newcards : newcards} );
    } else {
      this.resolveError(playerID);
    }
  },
  
  handleTargetPerson : function(playerID, cardID, personID) {
    if (this.doTargetPerson(playerID, cardID, personID)) {
      this.resolveCorrect(playerID);
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
  
  // TODO: decide on protocol
  resolveError : function(playerID) {
    var player = this.players[playerID];
    var state = {
      state : this.protocol.state.ERROR,
      map     : this.map,
      players : this.players
    };
    player.socket.emit('result', U.extend(state, data));
  },
  
  // TODO: decide on protocol...
  resolveCorrect : function(playerID, data) {
    var player = this.com.playerList[playerID];
    var state = {
      state : this.protocol.state.CORRECT
    };
    player.socket.emit('result', U.extend(state, data));
  },
  
  updateGame : function() {
    // broadcast
    // TODO: decide on protocol ... mb just broadcast changes?
    var state = {
      map     : this.map,
      players : this.players
    };
    this.io.sockets.json.emit('update', state);
  },
  
  refillCards : function(playerID, cards) {
    var ret = {};
    if ((this.com.gameList.length == 0) && 
      (this.com.players[playerID].cards.length - cards.length < 0)) 
    {
      this.compactCards(playerID);
    } else {
      ret = this.replenishCards(playerID, cards);
    };
    
    return ret;    
  },
  
  replenishCards : function(playerID, cards) {
    var ret = {};
    for (var i in cards) {
      this.com.players[playerID].cards[i] = this.drawCard(this.com.gameDeck, this.com.gameList);
      ret[cards[i]] = this.com.players[playerID].cards[i];
    };
    return ret;
  },
  
  compactCards : function(playerID) {
    var newcards = [];
    var player = this.com.players[playerID];
    for (var i in player.cards) {
      var card = player.cards[i];
      if (card) {
        newcards.push(card);
      };
    };
    
    player.cards = newcards;
  }
});
