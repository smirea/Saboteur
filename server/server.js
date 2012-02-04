global.include = require('include').include;
include('./utilsServer.js');

var http = require('http')
, url = require('url')
, fs = require('fs')
, app;

app = http.createServer(function(req, res){
  // your normal app code
  var path = url.parse(req.url).pathname;
  switch (path){
  case '/':
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello! Try the <a href="/client.html">Socket.io Test</a></h1>');
    res.end();
  break;
  case '/client.html':
    fs.readFile(__dirname + path, function(err, data){
      if (err) return send404(res);
      res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'})
      res.write(data, 'utf8');
      res.end();
    });
  break;

  default: send404(res);
  }
}),

send404 = function(res){
  res.writeHead(404);
  res.write('404');
  res.end();
};

app.listen(8080);

var io = require('socket.io').listen(app);
// using var Protocol
//var Protocol = new Protocol();
var sab = new SaboteurServer(io);

//sab.setupGame();
io.sockets.on('connection', function(socket){
    console.log("Connection " + socket.id + " accepted.");
    var event = Protocol.createEvent('setup', 'client', 'custom', {
      playerID : socket.id
    });
    socket.emit('setup', event);
    
    this.disconnect = function(data) {
      console.log("Connection " + socket.id + " terminated.");
    };
    
    // CUSTOM HANDLERS
    this.handlers = U.extend({}, Protocol.events.server.custom);
    
    // TODO: hacks for testing    
    this.handlers.startGame.callback = function(event) {
      sab.setupGame();
      sab.broadcastStartGame();
    };
    
    // TODO: hacks for testing
    this.handlers.setup.callback = function(event) {
      // TODO: might use a class, mb?
      var playerID = event.data.playerID
      sab.playerList[playerID] = {};
      sab.playerList[playerID].name = event.data.name;
      sab.playerList[playerID].socket = socket;
    };
    
    // TODO: mb make a real chat system
    this.handlers.chat.callback = function(event) {
      io.sockets.json.emit('chat', event);
    };
    
    this.handlers.discard.callback = function(event) {
      sab.handleDiscard(event.data)
    };
    
    this.handlers.targetPublicPerson.callback = function(event) {
      sab.handleTargetPublicPerson(event.data);
    };
    
    this.handlers.targetPrivatePerson.callback = function(event) {
      sab.handleTargetPrivatePerson(event.data);
    };
    
    this.handlers.targetMap.callback = function(event) {
      sab.handleTargetMap(event.data);
    };
    
    this.handlers.heal.callback = function(event) {
      sab.handleHeal(event.data);
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
});
