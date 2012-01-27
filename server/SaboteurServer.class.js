var SaboteurServer = Saboteur.extend({
  init    : function(io, protocol) {
    this._super();
    this.io = io;
    this.protocol = protocol;
  },
  
  handleDiscard : function(playerID, cards) {
    console.log(playerID);
    if (this.doDiscard(playerID, cards)) {
      this.resolveCorrect(playerID);
    } else {
      this.resolveError(playerID);
    }
  },
  
  handleTargetPerson : function(playerID, cardID, personID) {
    if (this.doTargetPerson(playerID, cardID, personID)) {
      this.resolveCorrect(playerID);
    } else {
      this.resolveError(playerID);
    }
  },
  
  handleTargetMap : function(playerID, cardID, posx, posy) {
    if (this.doTargetMap(playerID, cardID, posx, posy)) {
      this.resolveCorrect(playerID);
    } else {
      this.resolveError(playerID);
    }
  },
  
  handleHeal : function(playerID, cards, target) {
    if (this.doHeal(playerID, cards, target)) {
      this.resolveCorrect(playerID);
    } else {
      this.resolveError(playerID);
    }
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
