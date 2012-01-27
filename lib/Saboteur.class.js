var Saboteur = Class.extend({
  init  : function( options, cards ){
    // General multi-purpose object. Will store in it all information regarding the game
    this.com = {
      // {Array} list of all player objects
      players      : {},
      // {Array} the actual deck of cards for the game
      gameList     : [],
      // {Object} list containing the number of each type of action/path card in the game
      gameListDetails : {},
      // {Array} the actual deck of role cards
      roleList     : [],
      // {Object} list containing the number of each type of role card in the game
      roleListDetails : {},
      // {Array} bidimensional matrix containing the layout of the game
      map          : [],
      // {Object} the extended options object, stored for later use
      opt          : {},
      // {Object} the extended classes object, stored for later use
      cls          : {},
      // {Object} the extended cards object, stored for later use
      cards        : {}
    };
    
    U.extend( this.com.opt, SaboteurOptions.options, options );
    U.extend( true, this.com.cards, SaboteurOptions.cards, cards );
    U.extend( this.com.gameListDetails, this.com.cards.path, this.com.cards.action );
    U.extend( this.com.roleListDetails, this.com.cards.role );
    
    // create the card decks
    this.com.gameList = this.makeDeck( this.com.gameListDetails );
    this.com.roleList = this.makeDeck( this.com.roleListDetails );
  },
  
  /**
   * Creates a deck of card given a list of class names from the S. namespace
   * @param {Object} list  a list of (className : cardCount) pairs
   * @param {Object} namespace  An object containing the classes used - defaults to S
   */
  makeDeck : function( list, namespace ){
    namespace = namespace || S;
    var arr = [];
    var c2 = 0;
    for( var i in list ){
      for( var j=0; j<list[i]; ++j ){
        if( namespace[i] ){
          arr.push( new namespace[i] );
        } else {
          console.warn( '[Unknown Class]: '+i );
        };
      };
    };
    
    return arr;
  },
  
  // EVENTS
  doDiscard : function(playerID, cards) {
    if (!this.validateCards(playerID, cards)) return false;
    
    for (var i in cards) {
      this.com.players[playerID].cards[cards[i]] = null;
    };
    
    return true;
  },
  
  doTargetPerson : function(playerID, cardID, personID) {
    return true;
  },
  
  doTargetMap : function(playerID, cardID, posx, posy) {
    return true;
  },
  
  doHeal : function(playerID, cards, target) {
    return true;
  },
  
  canHeal : function(playerID) {
    return this.com.players[playerID].cards.length >= this.com.opt.healDiscard;
  },
  
  validateCards : function(playerID, givencards) {
    // check for all cards being selected are right
    console.log(this.com.players);
    var end = this.com.players[playerID].cards.length;
    for (var i in givencards) {
      console.log('***', givencards[i], end);
      if (givencards[i] >= end) {
        return false;
      };
    };
    
    return true;
  },
  
  //*/
});
