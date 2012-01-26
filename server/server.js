require('./Server.class.js')

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
var server = new Server();

io.sockets.on('connection', function(socket){
    console.log("Connection " + socket.id + " accepted.");
    //s.connection(socket);
    
    // EVENTS
    this.allowedEvents = [
                          'disconnect',
                          'chat',
                          'discard',
                          'targetPerson',
                          'targetMap',
                          'heal'
                         ];
    
    this.disconnect = function(data) {
      console.log("Connection " + socket.id + " terminated.");
    };
    
    this.chat = function(data) {
      console.log('Chat message from: ' + socket.id);
      console.log(data);
      io.sockets.json.emit('chat', data);
    };
    
    this.discard = function(data) {
      console.log(data);
    };
    
    this.targetPerson = function(data) {
      console.log(data);
    };
    
    this.targetMap = function(data) {
      console.log(data);
    };
    
    this.heal = function(data) {
      console.log(data);
    };
    
    // REGISTERING EVENTS
    for (var i in this.allowedEvents) {
      var event = this.allowedEvents[i];
      var self = this;
      
      socket.on(event, self[event]);
      console.log('For event', event, 'Using function', self[event]);
    };
});

