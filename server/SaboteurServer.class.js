var SaboteurServer = Saboteur.extend({
  init    : function(io, protocol) {
    this._super();
    this.io = io;
    this.protocol = protocol;
  },
  
  handleDiscard : function(playerID, cards) {
    console.log(playerID);
    if (this.doDiscard(0, cards)) {
      // TODO: report correct
      this.resolveCorrect(playerID);
    } else {
      // TODO: error convention
      this.resolveError(playerID);
    }
  },
  
  handleTargetPerson : function(playerID, cardID, personID) {
    
  },
  
  handleTargetMap : function(playerID, cardID, posx, posy) {
  
  },
  
  handleHeal : function(playerID, cards, target) {
  
  },
  
  resolveError : function(playerID) {
    // TODO: decide on protocol
    var player = this.com.players[playerID];
    var state = {
      state : this.protocol.state.ERROR,
      map     : this.com.map,
      players : this.com.players
    };
    player.socket.emit('result', state);
  },
  
  resolveCorrect : function(playerID) {
    // TODO: establish protocol for OK message
    var player = this.com.players[playerID];
    var state = {
      state : this.protocol.state.CORRECT
    };
    player.socket.emit('result', state);
  },
  
  updateGame : function() {
    // broadcast
    // TODO: decide on protocol ... mb just broadcast changes?
    var state = {
      map     : this.com.map,
      players : this.com.players
    };
    this.io.sockets.json.emit('update', state);
  }
});
