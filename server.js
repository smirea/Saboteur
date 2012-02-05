global.include = require('include').include;
include('server/utilsServer.js');

var connect = require('connect');

var app = connect.createServer(
  connect.static( __dirname + '/' )
).listen(8080)

var io = require('socket.io').listen(app);
// using var Protocol
//var Protocol = new Protocol();
var sab = new SaboteurServer(io);

//sab.setupGame();
io.sockets.on('connection', function(socket){
    console.log("Connection " + socket.id + " accepted.");

    this.disconnect = function(data) {
      console.log("Connection " + socket.id + " terminated.");
    };

    // CUSTOM HANDLERS
    var def = function(name) {
      return function(event) {
        return sab.events[name].handle.call(sab, event);
      };
    };
    
    this.handlers = U.extend({}, Protocol.events.server.custom);
    for (var h in this.handlers) {
      this.handlers[h].callback = def(h);
    };
    
    // TODO: unhack this?
    this.handlers.setup.callback = function(event) {
      // TODO: might use a class, mb?
      var playerID = event.data.playerID
      sab.playerList[playerID] = {};
      sab.playerList[playerID].name = event.data.name;
      sab.playerList[playerID].socket = socket;
      return sab.events.setup.handle.call(sab, event);
    };
    
    var fun = function(handler) {
      return function(event) {
        if (handler.name != event.name) {
          throw new Error('Invalid datatype ' + event.name + ' for event ' + handler.name);
        } else {
          console.log('handling event:',handler.name);
          console.log(event);
          return handler.callback.call(this, event);
        };
      };
    };
      
    for (var h in this.handlers) {
      var handler = this.handlers[h];
      socket.on(handler.name, fun(handler));
    }
    
    // DO STUFF...
    
    var event = Protocol.createEvent('setup', 'client', 'custom', {
      playerID : socket.id
    });
    socket.emit('setup', event);
});
