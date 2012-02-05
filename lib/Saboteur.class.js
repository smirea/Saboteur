var Saboteur = Class.extend({
  init  : (function(){
    
    return function( options, cards ){
      // General multi-purpose object. Will store in it all information regarding the game
      U.extend( this, {
        // {Array} list of all player objects
        players      : {},
        //{Object} class for holding map state information
        map : {},
        // {Object} class for holding event info: handle, check, execute
        events : {},
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
      
      create_factory.call( this );
      create_events.call( this );
      
    };
    
    function create_factory(){
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
      F.register({
        'start'     : startListDetails,
        'goal'      : goalListDetails,
        'dummyGoal' : dummyGoalListDetails,
        'game'      : gameListDetails,
        'role'      : roleListDetails
      });
    };
    
    function create_events(){
      for (var h in Protocol.events.server.custom) {
        this.events[h] = {};
        U.extend(this.events[h], {
          handle  : function() {
            logger.warn('Undefined handle for', h);
          },
          check : function() {
            logger.warn('Undefined check for', h);
          },
          execute : function() {
            logger.warn('Undefined execute for', h);
          }
        });
      };
      
      // EVENT discard
      U.extend(this.events.discard, {
        check : function(playerID, cards) {
          return this.doDiscard(true, playerID, cards);
        },
        execute : function(playerID, cards) {
          return this.doDiscard(false, playerID, cards);
        }
      });
      
      // EVENT targetPublicPlayer
      U.extend(this.events.targetPublicPlayer, {
        check : function(playerID, playerCardID, targetID, targetCardID) {
          return this.doTargetPublicPlayer(false, playerID, playerCardID, targetID, targetCardID);
        },
        execute : function(playerID, playerCardID, targetID, targetCardID) {
          return this.doTargetPublicPlayer(true, playerID, playerCardID, targetID, targetCardID);
        }
      });
      
      // EVENT targetPrivatePlayer
      U.extend(this.events.targetPrivatePlayer, {
        check : function(playerID, playerCardID, targetID) {
          return this.doTargetPrivatePlayer(false, playerID, playerCardID, targetID);
        },
        execute : function(playerID, playerCardID, targetID) {
          return this.doTargetPrivatePlayer(true, playerID, playerCardID, targetID);
        }
      });
      
      // EVENT targetMap
      U.extend(this.events.targetMap, {
        check : function(map, posx, posy) {
          return this.doTargetMap(false, map, posx, posy);
        },
        execute : function(map, posx, posy) {
          return this.doTargetMap(true, map, posx, posy);
        }
      });
      
      // EVENT heal
      U.extend(this.events.heal, {
        check : function(playerID, cards, targetCardID) {
          return this.doHeal(false, playerID, cards, targetCardID);
        },
        execute : function(playerID, cards, targetCardID) {
          return this.doHeal(true, playerID, cards, targetCardID);
        }
      });
    };
    
  })(),
  
  setPlayers : function( players ){
    this.players = {};
    for( var i in players ){
      this.players[ i ] = new S.Player( players[i] );
    };
    return this;
  },

  // EVENTS
  doDiscard : function(dryrun, playerID, cards) {
    var player = this.players[playerID];
    if (!player) {
      return false;
    } else {
      var hand = player.private.hand;
      if (hand.validateCards(cards)) {
        if (!dryrun) {
          hand.remove(cards);
        };
        return true;
      } else {
        return false;
      };
    };
  },

  /**
   * @return true if can be done, false otherwise
   */
  doTargetPublicPlayer : function(dryrun, playerID, playerCardID, targetId, targetCardID) {
    var player = this.players[playerID];
    if (!player) {
      return false;
    } else {
      var target = this.players[targetID];
      var card = player.private.hand.get(playerCardID);
      
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
  doTargetPrivatePlayer : function(dryrun, playerID, playerCardID, targetID) {
    var player = this.players[playerID];
    if (!player) {
      return false;
    } else {
      var target = this.players[targetID];
      var card = (player.private.hand.get(playerCardID) 
                    ? this.factory.get('game', playerCardID) 
                    : null);
      
      if (!target || !card) {
        return false;
      } else {
        return (dryrun ? true : null);
      };
    };
  },
  
  doTargetMap : function(dryrun, playerID, cardID, posx, posy) {
    var player = this.players[playerID];
    if (!player) {
      return false;
    } else {
      var card = (player.private.hand.get(playerCardID) 
                    ? this.factory.get('game', playerCardID) 
                    : null);
                    
      if (!card) {
        return false;
      } else {
        return card.execute(dryrun, this.map, posx, posy);
      };
    }; 
  },
  
  doHeal : function(dryrun, playerID, cards, targetCardID) {
    var player = this.players[playerID];
    
    if ( !player
      || !cards.length == this.opt.healDiscard
      || !player.private.hand.validateCards(cards))
    {
      if (dryrun) {
        // TODO: continue here
        return true;
      } else {
        this.doDiscard(playerID, cards);
        // TODO: continue here
      }
    } else {
      return false;
    };
  }
});
