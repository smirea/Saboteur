var SaboteurServer = Saboteur.extend({
  init    : function(io, protocol) {
    this._super();
    this.io           = io;
    this.map = {};
    this.roleDeck = [];
    this.gameDeck = [];
    this.playerList   = {};
    
    this.events.chat.handle = function(event) {
      // TODO: again...please think for a chat system :))
      this.playerList[event.data.playerID].socket.emit(event.name, event);
    };
    
    this.events.setup.handle = function(event) {
      // TODO: is already hacked into server.js
    };
    
    this.events.startGame.handle = function(event) {
      this.setupGame();
      this.broadcastStartGame();
    };
    
    this.events.discard.handle = function(event) {
      this.handleDiscard(event);
    };
    
    this.events.targetPublicPlayer.handle = function(event) {
      this.handleTargetPublicPlayer(event);
    };
    
    this.events.targetPrivatePlayer.handle = function(event) {
      this.handleTargetPrivatePlayer(event);
    };
    
    this.events.targetMap.handle = function(event) {
      this.handleTargetMap(event);
    };
    
    this.events.heal.handle = function(event) {
      this.handleHeal(event);
    };
  },
  
  setupGame : function() {
    var i = -1;
    while (++i < this.factory.size('role')) {
      this.roleDeck[i] = i;
    };
    
    i = -1;
    while (++i < this.factory.size('game')) {
      this.gameDeck[i] = i;
    };
    
    this.roleDeck = this.shuffle(this.roleDeck);
    this.gameDeck = this.shuffle(this.gameDeck);

    var names = [];
    for (var n in this.playerList) {
      names[n] = this.playerList[n].name;
    };
    this.players = this.createPlayers( names);
    // give out roles
    this.assignRoles( this.players );
    
    // give out cards
    this.assignCards( this.players, this.opt.initialCards );
    
    // pre-discard the set amout of cards
    this.discardFromGameDeck( this.gameDeck, this.opt.discardCards );
  },
  
  broadcastStartGame : function() {
    console.log('Broadcasting starting game', this.playerList);
    for (var i in this.playerList) {
      this.resetClientState(i);
    };
  },
  
   /**
   * Assigns a role to each player
   * @param {Array} players  Array of S.Player objects to assign them roles
   */
  assignRoles : function( players){
    for( var i in players ){
      players[i].private.roleCard = this.drawCard( this.roleDeck);
    };
  },
  
  /**
   * Assign the default number of starting cards to each player
   * @param {Array} players  Array of S.Player objects to assign them cards
   * @param {Int} cards  Number of cards to assign
   */
  assignCards : function( players, maxcards ){
    for( var i in players ){
      var cards = []
      for( var j = 1; j<=maxcards; ++j ){
        cards.push( this.drawCard( this.gameDeck ) );
      };
      players[i].private.hand.add( cards );
    };
  },
  
  /**
   * Generates the list of player objects from opt.players into players
   * @param {Array} players  Array of player names
   * @return {Array}  A list of S.Player classes
   */
  createPlayers : function( players ){
    var team = {};
    for( var i in players ){
      team[i] = new S.Player( players[i] );
      team[i].id = i;
    };
    return team;
  },
  
  /**
   * Randomizes the elements in the array
   * @param {Array} arr
   */
  shuffle : (function(){
    function randomSort(){ return Math.floor( Math.random()*3 )-1; };
    return function( arr ){
      return arr.sort( randomSort );
    }
  })(),
  
  /**
   * Given a deck a card, returns the top card and removes it from the deck;
   * @param {Array} deck  an array for the indexess of the deck of cards
   */
  drawCard : function( indexes ){
    return indexes.pop();
  },
  
  /**
   * Discards cards from the top of the deck
   * @param {Array} deck  The deck to draw from
   * @return {Int} number The number of cards left
   */
  discardFromGameDeck : function( deck, number ){
    deck = deck || this.gameDeck;
    for( var i=0; i<number; ++i ){
      deck.pop();
    }
    return deck.length;
  },

  replaceCard : function(playerID, cardID) {
    this.players[playerID].private.hand.remove([cardID]);
    var newCardID = this.drawCard(this.gameDeck);
    if (!U.isUndefined(newCardID)) {
      this.players[playerID].private.hand.add([newCardID]);
      var newcards = [newCardID];
    }
    
    return newcards;
  },
  
  execute : function(event) {
    var a = U.extend([], arguments);
    a.shift();
    return this.events[event].execute.apply(this, a);
  },
  
  // HANDLERS
  handleDiscard : function(event) {
    var data = event.data;
    var res = this.execute(event.name, data.playerID, data.cards);
    if (res) {
      var newcards = [];
      for (var i = data.cards.length; i > 0 ; i--) {
        var cardID = this.drawCard( this.gameDeck );
        if (null === cardID) {
          break;
        } else {
          this.players[data.playerID].private.hand.add([cardID]);
          newcards.push(cardID);
        };
      };
      // TODO: standardize response
      var extra = { newcards : newcards };
      this.resolveCorrect(data.playerID, event, extra);
    } else {
      this.resolveError(data.playerID);
    }
  },
  
  handleTargetPublicPlayer : function(event) {
    var data = event.data;
    if (this.events.targetPublicPlayer.execute(data.playerID, data.cardID, data.targetID, data.targetCardID)) {
      var newcards = this.replaceCard(data.playerID, data.cardID);
      if (!U.isUndefined(newcards)) {
        var extra = { newcards : newcards };
      };
      
      this.resolveCorrect(data.playerID, event, extra);
    } else {
      this.resolveError(data.playerID);
    }
  },
  
  handleTargetPrivatePlayer : function(event) {
    var data = event.data;
    var result = this.events.targetPrivatePlayer.execute(data.playerID, data.cardID, data.targetID);
    if (!result) {
      if (null == result) {
        var player = this.players[data.playerID];
        var card = player.private.hands.get(data.cardID);
        if (null === card) {
          return this.resolveError(data.playerID);
        };
        
        card = this.factory.get('game', data.cardID);
        var target = this.players[data.targetID];
        
        switch(card._className) {
        case 'Inspection':
          var extra = {
            roleCard : target.private.roleCard
          };
          
          var newcards = this.replaceCard(data.playerID, data.cardID);
          if (!U.isUndefined(newcards)) {
            extra.newcards = newcards;
          };
          
          this.resolveCorrect(data.playerID, event, extra);
          break;
        case 'SwapHand':
          if (null === player.private.hand.get(data.cardID)) {
            return this.resolveError(data.playerID);
          };
          
          var newcards = this.replaceCard(data.playerID, data.cardID);
          if (!U.isUndefined(newcards)) {
            var extra = { newcards : newcards };
          };
          
          var temp = player.private.hand.cards;
          player.private.hand.cards = target.private.hand.cards;
          target.private.hand.cards = temp;
          
          // TODO: need to also transmit to the other player and to everyone else...
          this.resolveCorrect(data.playerID, event, extra);
          break;
        case 'SwapHats':
          // TODO: what if no more roles left...
          var newRole = this.drawCard(this.roleDeck);
          target.private.roleCard = newRole;
          var extra = {
            roleCard : newRole
          };
          this.resolveCorrect(data.targetID, extra);
          // this.updateClientState(data.targetID, extra);
          break;
        default:
          throw new Error('Unexpected card played', card._className, card.id);
          break;
        }
      } else {
        this.resolveError(playerID);
      }
    } else {
      this.resolveError(playerID);
    }
  },
  
  handleTargetMap : function(event) {
    var data = event.data;
    if (this.events.targetMap.execute(data.playerID, data.cardID, data.posx, data.posy)) {
      var newcards = this.replaceCard(data.playerID, data.cardID);
      if (!U.isUndefined(newcards)) {
        var extra = { newcards : newcards };
      };
      
      this.resolveCorrect(playerID, event, extra);
    } else {
      this.resolveError(playerID);
    }
  },
  
  handleHeal : function(playerID, cards, target) {
    if (this.events.heal.execute(false, playerID, cards, target)) {
    //TODO: continue here....
      this.resolveCorrect(playerID);
    } else {
      this.resolveError(playerID);
    }
  },
  
  // HELPERS
  
  // -- STATE
  getGameState : function(playerID) {
    // public info on all people
    var players = U.each(this.players, function(k, v) { return { public : v.public}});
    // private info on you
    players[playerID].private = this.players[playerID].private; 
    var state = {
      map     : this.map,
      players : players
    };
    return state;
  },
  
  resolveError : function(playerID, data) {
    console.log('*** ERROR');
    
    var eventResult = Protocol.createEvent('result', 'client', 'custom', {
      state : Protocol.state.ERROR
    });
    var eventReset = Protocol.createEvent('reset', 'client', 'custom', this.getGameState(playerID));
    
    var event = Protocol.createEvent('multiple', 'client', 'custom', {
      events : [ eventResult, eventReset ]
    });
    
    this.playerList[playerID].socket.emit('multiple', event);
  },
  
  resolveCorrect : function(playerID, prevEvent, extra) {
    console.log('*** CORRECT');
    
    var eventResult = Protocol.createEvent('result', 'client', 'custom', {
      state : Protocol.state.CORRECT
    });
    
    var name = 'result';
    var event = eventResult;
    if (prevEvent) {
      name = 'multiple';
      var eventUpdate = Protocol.createEvent('update', 'client', 'custom', {
        prevEvent : prevEvent,
        response  : extra || {}
      });
      
      event = Protocol.createEvent('multiple', 'client', 'custom', {
        events : [ eventResult, eventUpdate ]
      });
    };
    
    this.playerList[playerID].socket.emit(name, event);
  },
  
  updateClientState : function(playerID, data) {
    // TODO: think about it...
  },
  
  resetClientState : function(playerID) {
    var event = Protocol.createEvent('reset', 'client', 'custom', this.getGameState(playerID));
    this.playerList[playerID].socket.emit('reset', event);
  }
});
