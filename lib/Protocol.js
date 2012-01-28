var Event = Class.extend({
//Event = Class.extend({
  init : function(name, data) {
    this.name = name;
    this.data = data;
  }
});

var Protocol;
( function() {
Protocol = {
//Protocol = Class.extend({
  state   : {
    CORRECT : 0,
    ERROR   : 1
  },
  events  : {
    server : {
      admin : {
        connect     : 'connect',
        disconnect  : 'disconnect',
        message     : 'message'
      },
      custom  : {
        chat                  : new Event('chat', {
          message : ''
        }),
        setup                 : new Event('setup', {
          playerID : 0,
          name     : ''
        }),
        startGame             : new Event('startGame', {
          // nothing so far..
        }),
        discard               : new Event('discard', {
          playerID  : '',
          cards     : []
        }), 
        targetPublicPerson    : new Event('targetPublicPerson', {
          playerID      : 0, // player
          cardID        : 0, // card
          targetID      : 0, // player
          targetCardID  : 0 // card
        }), 
        targetPrivatePerson   : new Event('targetPrivatePerson', {
          playerID      : 0, // player
          cardID        : 0, // card
          targetID      : 0 // player
        }),
        targetMap             : new Event('targetMap', {
          playerID      : 0, // player
          cardID        : 0, // card
          posx          : 0, // mapX
          posy          : 0 // mapY
        }), 
        heal                  : new Event('heal', {
          playerID      : 0, // player
          cards         : [], // card
          targetID      : 0 // card
        })
      }
    },
    client : {
      admin : {
        connect           : 'connect',
        disconnect        : 'disconnect',
        reconnect         : 'reconnect',
        reconnecting      : 'reconnecting',
        reconnect_failed  : 'reconnect_failed',
        message           : 'message'
      },
      custom : {
        chat      : new Event('chat', {
          playerID : 0, // player
          message  : ''
        }),
        setup     : new Event('setup', {
          playerID  : 0, // player
          name      : ''
        }),
        result    : {
          correct : new Event('result', {
            state : 0, // STATE
          }),
          error   : new Event('result', {
            state   : 0, // STATE
            map     : {}, // MAP
            players : [] // public player
          })
        },
        reset     : new Event('reset', {
          map     : {}, // MAP
          hand    : {}, // private player
          players : [] // public players
        })
      }
    }
  },
  createEvent : function(what, where, type, subtype) {
    var event = this.events[where][type];
    if (subtype) {
      event = event[subtype];
    };
    return U.extend({}, event);
  }
};
//});

})();
