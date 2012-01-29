var Saboteur = Class.extend({
  init  : function( options, cards ){
    // General multi-purpose object. Will store in it all information regarding the game
    U.extend( this, {
      // {Array} list of all player objects
      players      : {},
      //{Object} class for holding map state information
      map : {},
      // {Object} the extended options object, stored for later use
      opt             : {},
      // {Object} the extended classes object, stored for later use
      cls             : {},
      // {Object} the extended cards object, stored for later use
      cards           : {},
      // [Abstract] defined later in sub-classes
      map             : null
    });
    
    U.extend( this.opt, SO.options, options );
    U.extend( true, this.cards, SO.cards, cards );
    
    var startListDetails     = {};
    var gameListDetails      = {};
    var roleListDetails      = {};
    var goalListDetails      = {};
    var dummyGoalListDetails = {};

    U.extend( startListDetails, this.cards.start );
    U.extend( gameListDetails, this.cards.path, this.cards.action );
    U.extend( roleListDetails, this.cards.role );
    dummyGoalListDetails = { GoalCard:U.objectLength(this.cards.goal) };
    goalListDetails = this.cards.goal;
    // create the card decks
    this.factory = new Factory({
      'start'     : startListDetails,
      'goal'      : goalListDetails,
      'dummyGoal' : dummyGoalListDetails,
      'game'      : gameListDetails,
      'role'      : roleListDetails
    });
  },
  
  // EVENTS
  doDiscard : function(playerID, cards) {
    if (!this.validateCards(playerID, cards)) return false;
    
    for (var i in cards) {
      this.players[playerID].private.cards[cards[i]] = null;
    };
    
    return true;
  },

  /**
   * @return true if can be done, false otherwise
   */
  doTargetPublicPerson : function(dryrun, playerID, playerCardID, targetId, targetCardID) {
    var player = this.players[playerID];
    if (!player) {
      return false;
    } else {
      var target = this.players[targetID];
      var card = player.private.cards[playerCardID];
      
      if (!target || !card) {
        return false;
      } else {
        return card.execute(dryrun, target, targetCardID);
      };
    };
  },
  
  /**
   * @return true if can be done, false otherwise, null if you asked to execute
   */
  doTargetPrivatePerson : function(dryrun, playerID, playerCardID, targetID) {
    var player = this.players[playerID];
    if (!player) {
      return false;
    } else {
      var target = this.players[targetID];
      var card = player.private.cards[playerCardID];
      
      if (!target || !card) {
        return false;
      } else {
        return (dryrun ? true : null);
      };
    };
  },
  
  doTargetMap : function(playerID, cardID, posx, posy) {
    
  },
  
  doHeal : function(playerID, cards, targetID, cardID) {
    var player = this.players[playerID];
    var target = this.players[targetID];
    var card = this.factory.get('game', cardID);
    if (cards.length == this.opt.healDiscard
      && true) // TODO: continue here...
    {
      this.doDiscard(playerID, cards);
    };
    
    return true;
  },
  
  
  // HELPERS
  canHeal : function(playerID) {
    return this.players[playerID].private.cards.length >= this.opt.healDiscard;
  },
  
  validateCards : function(playerID, givencards) {
    // check for all cards being selected are right
    for (var i in givencards) {
      if (!this.players[playerID].private.getCardPosition(givencards[i])) 
      {
        return false;
      };
    };
    
    return true;
  },
  //*/
});
