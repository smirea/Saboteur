var SaboteurServer = Saboteur.extend({
  init    : function(io, protocol) {
    this._super();
    this.io           = io;
    this.protocol     = protocol;
    this.com.roleDeck = [];
    this.com.gameDeck = [];
    this.com.playerList   = {};
  },
  
  setupGame : function() {
    var i = -1;
    while (++i < this.com.roleList.length) {
      this.com.roleDeck[i] = i;
    };
    
    i = -1;
    while (++i < this.com.gameList.length) {
      this.com.gameDeck[i] = i;
    };
    
    this.com.roleDeck = this.shuffle(this.com.roleDeck);
    this.com.gameDeck = this.shuffle(this.com.gameDeck);

    var names = [];
    for (var n in this.com.playerList) {
      names[n] = this.com.playerList[n].name;
    };
    this.com.players = this.createPlayers( names);
    
    // give out roles
    this.assignRoles( this.com.players );
    
    // give out cards
    this.assignCards( this.com.players, this.com.opt.startingCards ); // TODO: soon to be initial cards
    
    // pre-discard the set amout of cards
    this.discardFromGameDeck( this.com.gameDeck, this.com.opt.discardCards );
  },
  
   /**
   * Assigns a role to each player
   * @param {Array} players  Array of S.Player objects to assign them roles
   */
  assignRoles : function( players){
    for( var i in players ){
      players[i].roleCard = this.drawCard( this.com.roleDeck, this.com.roleList );
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
        players[i].cards.push( this.drawCard( this.com.gameDeck, this.com.gameList ) );
      };
    };
  },
  
  /**
   * Generates the list of player objects from com.opt.players into com.players
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
    console.log(playerID);
    if (this.doDiscard(playerID, cards)) {
      this.resolveCorrect(playerID);
    } else {
      this.resolveError(playerID);
    }
    console.log(this.com.gameDeck.length);
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
    var player = this.com.players[playerID];
    var state = {
      state : this.protocol.state.ERROR,
      map     : this.com.map,
      players : this.com.players
    };
    console.log(state);
    console.log(this.com.playerList);
    this.com.playerList[playerID].socket.emit('result', state);
  },
  
  // TODO: decide on protocol...
  resolveCorrect : function(playerID) {
    var player = this.com.players[playerID];
    var state = {
      state : this.protocol.state.CORRECT
    };
    player.socket.emit('result', state);
  },
  
  updateGame : function() {
    // broadcast
    // TODO: decide on protocol ... mb just broadcast changes?
    var state = {
      map     : this.com.map,
      players : this.com.players
    };
    this.io.sockets.json.emit('update', state);
  }
});
