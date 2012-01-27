var Saboteur = Class.extend({
  init  : function( options, cards ){
    // General multi-purpose object. Will store in it all information regarding the game
    U.extend( this, {
      // {Array} list of all player objects
      players      : {},
      // {Object} list containing the number of each type of action/path card in the game
      gameListDetails : {},
      // {Object} list containing the number of each type of role card in the game
      roleListDetails : {},
      // {Object} the extended options object, stored for later use
      opt          : {},
      // {Object} the extended classes object, stored for later use
      cls          : {},
      // {Object} the extended cards object, stored for later use
      cards        : {}
    });
    
    U.extend( this.opt, SaboteurOptions.options, options );
    U.extend( true, this.cards, SaboteurOptions.cards, cards );
    
    var startListDetails  = {};
    var goalListDetails   = {};
    var gameListDetails   = {};
    var roleListDetails   = {};

    U.extend( startListDetails, this.cards.start );
    U.extend( goalListDetails, this.cards.role );
    U.extend( gameListDetails, this.cards.path, this.cards.action );
    U.extend( roleListDetails, this.cards.role );
    
    // create the card decks
    this.factory = new Factory({
      'start' : startListDetails,
      'goal'  : goalListDetails,
      'game'  : gameListDetails,
      'role'  : roleListDetails
    });
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
    return this.players[playerID].cards.length >= this.opt.healDiscard;
  },
  
  validateCards : function(playerID, givencards) {
    // check for all cards being selected are right
    console.log(this.players);
    var end = this.players[playerID].cards.length;
    for (var i in givencards) {
      console.log('***', givencards[i], end);
      if (givencards[i] >= end) {
        return false;
      };
    };
    
    return true;
  },
  
<<<<<<< HEAD
=======
  replenishCards : function(playerID, cards) {
    for (var i in cards) {
      this.players[playerID].cards[i] = this.drawCard(this.gameList);
    };
  },
  
  actCards : function(playerID) {
    var newcards = [];
    var player = this.players[playerID];
    for (var i in player.cards) {
      var card = player.cards[i];
      if (card) {
        newcards.push(card);
      };
    };
    
    player.cards = newcards;
  }
>>>>>>> several big changes. MapClient almost working, but buggy. MUST FIX TODOs in Map
  //*/
});
