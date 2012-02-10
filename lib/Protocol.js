var Event = Class.extend({
//Event = Class.extend({
  init : function(name, data, callback) {
    this.name = name || '';
    this.data = data || {};
    this.callback = callback || function() {};
  }
});

var Protocol;
( function() {
Protocol = {
  state   : {
    CORRECT : 0,
    ERROR   : 1
  },
  events  : {
    server : {
      admin : {
        connect     : new Event('connect', null),
        disconnect  : new Event('disconnect', null),
        message     : new Event('message', '')
      },
      custom  : {
        chat                  : new Event('chat', {
          playerID  : 0, // player
          message   : ''
        }),
        setup                 : new Event('setup', {
          playerID : 0,
          name     : '',
          room     : ''
        }),
        startGame             : new Event('startGame', {
          // nothing so far..
        }),
        discard               : new Event('discard', {
          playerID  : '',
          cards     : []
        }), 
        targetPublicPlayer    : new Event('targetPublicPlayer', {
          playerID      : 0, // player
          cardID        : 0, // card
          targetID      : 0, // player
          targetCardID  : 0 // card
        }), 
        targetPrivatePlayer   : new Event('targetPrivatePlayer', {
          playerID      : 0, // player
          cardID        : 0, // card
          targetID      : 0 // player
        }),
        targetMap             : new Event('targetMap', {
          playerID      : 0, // player
          cardID        : 0, // card
          posx          : 0, // mapX
          posy          : 0, // mapY
          flipped       : false
        }), 
        heal                  : new Event('heal', {
          playerID      : 0, // player
          cards         : [], // card
          targetCardID      : 0 // card
        })
      }
    },
    client : {
      admin : {
        connect           : new Event('connect', null),
        disconnect        : new Event('disconnect', null),
        reconnect         : new Event('reconnect', null),
        reconnecting      : new Event('reconnecting', null),
        reconnect_failed  : new Event('reconnect_failed', 0),
        message           : new Event('message', null)
      },
      custom : {
        multiple  : new Event('multiple', {
          events  : [] // EVENT
        }),
        chat      : new Event('chat', {
          playerID : 0, // player
          message  : ''
        }),
        setup     : new Event('setup', {
          playerID  : 0 // player
        }),
        result    : new Event('result', {
          state   : 0 // STATE
        }),
        reset     : new Event('reset', {
          map     : {}, // MAP
          players : [] // all players, public for everyone, private for you
        }),
        update    : new Event('update', {
          turn      : 0, // playerID
          prevEvent : {}, // previous event information
          response  : {} // special response for each event
        })
      }
    }
  },
  createEvent : function(what, where, type, data) {
    if (!type || !where || !what) return null;
    var event = U.extend({}, this.events[where][type][what]);
    if (data) {
      U.extend(event.data, data);
    };
    
    delete event.callback;
    
    return event;
  }
};

})();
