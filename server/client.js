<html>
  <head>
    <title>Socket.io Test</title>
        
    <script src="/json.js"></script> <!-- for ie -->
    <script src="/socket.io/socket.io.js"></script>
  </head>
  <body>
    
    <script>
        
    var socket;
    var firstconnect = true;
        
    function connect() {
      if(firstconnect) {
        socket = io.connect(null);
          
        socket.on('message', function(data){ message(data); });
        socket.on('connect', function(){ status_update("Connected to Server"); });
        socket.on('disconnect', function(){ status_update("Disconnected from Server"); });
        socket.on('reconnect', function(){ status_update("Reconnected to Server"); });
        socket.on('reconnecting', function( nextRetry ){ status_update("Reconnecting in " 
          + nextRetry + " seconds"); });
        socket.on('reconnect_failed', function(){ message("Reconnect Failed"); });
          
        firstconnect = false;
      }
      else {
        socket.socket.reconnect();
      }
    }
        
    function disconnect() {
      socket.disconnect();
    }
        
    function message(data) {
      document.getElementById('message').innerHTML = "Server says: " + data;
    }
        
    function status_update(txt){
      document.getElementById('status').innerHTML = txt;
    }
      
    function esc(msg){
      return msg.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    
    function send() {
      socket.send("Hello Server!");    
    };        
      
    </script>
    
    <h1>Socket.io Test</h1>
    <div><p id="status">Waiting for input</p></div>
    <div><p id="message"></p></div>  
    <button id="connect" onClick='connect()'/>Connect</button>
    <button id="disconnect" onClick='disconnect()'>Disconnect</button>
    <button id="send" onClick='send()'/>Send Message</button>
  </body>
</html>
