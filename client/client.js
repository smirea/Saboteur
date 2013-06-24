var client;
var gameState = {
  socket        : null,
  playerID      : 0,
  firstconnect  : true
};

function status_update(txt){
  document.getElementById('status').innerHTML = txt;
};

function send() {
  //gameState.socket.send("Hello Server!");
  console.log('wtf??');
  gameState.socket.emit('message', '{aaa: "bbb"}');
};

var adminHandlers = U.extend(true, {}, Protocol.events.client.admin);
var handlers      = U.extend(true, {}, Protocol.events.client.custom);
var actions       = U.extend(true, {}, Protocol.events.server.custom);

// default handlers
var defaultAction = function(action) {
  return function(event) {
    gameState.socket.emit(action.name, event);
  };
};

for (var h in actions) {
  var action = actions[h];
  action.callback = defaultAction( action );
}

// HANDLERS

// ADMIN
adminHandlers.disconnect.callback = function() {
  gameState.gameState.socket.disconnect();
};

adminHandlers.message.callback = function(data) {
  document.getElementById('message').innerHTML = "Server says: " + data;
};

adminHandlers.connect.callback =  function() {
  status_update("Connected to Server");
};

adminHandlers.disconnect.callback = function() {
  status_update("Disconnected from Server");
};

adminHandlers.reconnect.callback = function(){
  status_update("Reconnected to Server");
};

adminHandlers.reconnecting.callback = function( nextRetry ) {
  status_update("Reconnecting in " + nextRetry + " seconds");
};

// CUSTOM

handlers.chat.callback = function(event) {
  // TODO: this is bullshit, please do a chat system :))
  document.getElementById('status').innerHTML += event.data.message;
};

handlers.setup.callback = function(event) {
  var data = event.data;
  gameState.playerID = data.playerID;
  client = new ClientSaboteur( $('#Saboteur'), {} );
};

handlers.result.callback = function(event) {
  // TODO: front end stuff...
  // look into event.data.state == Protocol.state.CORRECT or ERROR;
};

handlers.reset.callback = function(event) {
  var data = event.data;
  gameState.player = data.players[gameState.playerID];

  client
    .setPlayers( data.players )
    .createMap()
    .createHand();
  client.structure.map.hide();
  client.structure.players.hide();

  client.structure.progressBar
    .fadeOut( 600, function(){
      client.structure.map.fadeIn( 600 );
      client.structure.players.fadeIn( 3000 );
    });
};

handlers.multiple.callback = function(event) {
  var events = event.data.events;
  for (var i in events) {
    console.log('[EVENT] ---', events[i].name, events[i]);
    handlers[events[i].name].callback(events[i]);
  };
};

handlers.update.callback = function( event ){
  var data  = event.data;
  var prev  = data.prevEvent.data;
  var res   = data.response;

  switch( data.prevEvent.name ){
    case 'discard':
      client.players[ prev.playerID ].private.hand.remove( prev.cards );
      client.players[ prev.playerID ].private.hand.add( res.newcards );
      client.players[ prev.playerID ].private.hand.selected = $();
      break;
    case 'targetMap':
      client.map.insertCardAt( prev.cardID, prev.posx, prev.posy );
      client.players[ prev.playerID ].private.hand.selected.removeClass('selected');
      client.players[ prev.playerID ].private.hand.add( res.newcards );
      client.players[ prev.playerID ].private.hand.selected = $();
      break;
    default:
      logger.warn('[handlers.update.callback] Unknown event', arguments);
  }
}

// ACTIONS

// CUSTOM
// TODO: when we actually use this and not just test it, like now
// basically you just pass the Protocol.event that the function needs, and you send it
actions.chat.callback = function(event) {
  var event = Protocol.createEvent('chat', 'server', 'custom');
  // data.message = message;
  event.data.playerID = gameState.playerID;
  event.data.message = 'testing...';
  gameState.socket.emit('chat', event);
};


actions.targetPublicPlayer.callback = function(event) {
  var event = Protocol.createEvent('targetPublicPlayer', 'server', 'custom');
  event.data.playerID = playerID;
  event.data.targetID = playerID;
  event.data.targetCardID = 100;

  gameState.socket.json.emit('targetPublicPlayer',  event);
};

actions.targetPrivatePlayer.callback = function(event) {
  var event = Protocol.createEvent('targetPrivatePlayer', 'server', 'custom');
  event.data.playerID = playerID;
  // TODO: hack...fix later :p
  event.data.cardID = player.private.hand.cards[0];
  event.data.targetID = playerID;

  gameState.socket.json.emit('targetPrivatePlayer', event);
};

actions.heal.callback = function(event) {
  var event = Protocol.createEvent('heal', 'server', 'custom');
  // data.cards = cards;
  // data.targetCardID = targetCardID;
  event.data.playerID = playerID;
  // TODO: hack...fix later :p
  event.data.cards = [ player.private.hand.cards[0], player.private.hand.cards[1]];
  event.data.targetCardID = 100;

  gameState.socket.json.emit('heal',  event);
};

actions.setup.callback = function(event) {
  var event = Protocol.createEvent('setup', 'server', 'custom');
  event.data.playerID = gameState.playerID;
  event.data.name = $('#name').val();
  event.data.room = Math.floor( Math.random() * 10000 );

  gameState.socket.emit('setup', event);
  client.preloadImages();
  //TODO: major hack, need a handshake until you start game,
  // or some form of ACK mechanism, mb even call start separately...
};

actions.startGame.callback = function(event) {
  //TODO: think about this shit...
  event = event || Protocol.createEvent('startGame', 'server', 'custom');
  gameState.socket.emit('startGame', event);
};

// LOG stuff
for (var i in actions) {
  actions[i]._callback = actions[i].callback;
  actions[i].callback = (function(action) {
    return function(event) {
      console.log('[ACTION]', action.name, 'action:', action, 'event:', event);
      return action._callback(event);
    };
  })(actions[i]);
};

window.onLoad = connect();

function connect() {
  if(gameState.firstconnect) {
    gameState.socket = io.connect( SO.server.address );
    // gameState.socket = io.connect( null ); // TODO: need to stop modifying each other :))m

    // ADMIN HANDLERS
    for (var a in adminHandlers) {
      gameState.socket.on(adminHandlers[a].name, adminHandlers[a].callback);
    };

    // CUSTOM HANDLERS
    var fun = function(handler) {
      return function(event) {
        if (handler.name != event.name) {
          throw new Error('Invalid datatype ' + event.name + ' for event ' + handler.name);
        } else {
          console.log('[EVENT]:', event.name, ', event:', event, ', handler:', handler);
          return handler.callback.call(this, event);
        };
      };
    };

    for (var h in handlers) {
      var handler = handlers[h]
      gameState.socket.on(handler.name, fun(handler));
    }

    firstconnect = false;
  }
  else {
    gameState.socket.socket.reconnect();
  }
}