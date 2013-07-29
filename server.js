global.include = require('include').include;
include('server/utilsServer.js');

var PORT = 8080;

var connect = require('connect');

var app = connect.createServer(
  connect.static( __dirname + '/' )
).listen(PORT)

var io = require('socket.io').listen(app);

console.log('Server started on port `%s' + "\n", PORT);

var rooms = {};
var players = {};

io.sockets.on('connection', function(socket){
    console.log("Connection " + socket.id + " accepted.");

    this.disconnect = function(data) {
      // TODO: handle room problems...
      console.log("Connection " + socket.id + " terminated.");
    };

    // CUSTOM HANDLERS
    var def = function(name, id) {
      return function(event) {
        var room = players[id];
        if (!room) {
          console.log('Error: player not registered in any room', id);
        };
        var sab = rooms[room];
        return sab.events[name].handle.call(sab, event);
      };
    };
    
    this.handlers = U.extend({}, Protocol.events.server.custom);
    for (var h in this.handlers) {
      this.handlers[h].callback = def(h, socket.id);
    };
    
    // TODO: unhack this?
    this.handlers.setup.callback = function(event) {
      var data = event.data;
      if (!rooms[data.room]) {
        players[data.playerID] = data.room;
        rooms[data.room] = new ServerSaboteur(io);
      };
      
      var sab = rooms[data.room];
      
      sab.playerList[data.playerID] = {};
      sab.playerList[data.playerID].name = data.name;
      sab.playerList[data.playerID].socket = socket;
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
