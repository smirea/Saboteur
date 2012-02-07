var ServerSaboteur = Saboteur.extend({
  _className : 'ServerSaboteur',
  init  : (function(){
    return function(io, protocol) {
      this._super();
      this.io           = io;
      this.roleDeck     = [];
      this.gameDeck     = [];
      
      this.map          = {};
      this.playerList   = {};
      
      create_handlers.call(this);
    };
    
    function create_handlers() {  
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
    };
  })(),
  
  /**
   * Prepares the game for start. 
   * Sets up the decks of cards. 
   * Arranges the players, based on the given id <-> name in this.playerList.
   * Instantiates the players based on options and name.
   * Does the pre-game actions, like discards...
   */
  setupGame : function() {
    var i = -1;
    while (++i < F.size('role')) {
      this.roleDeck[i] = i;
    };
    
    i = -1;
    while (++i < F.size('game')) {
      this.gameDeck[i] = i;
    };
    
    this.roleDeck = this.shuffle(this.roleDeck);
    this.gameDeck = this.shuffle(this.gameDeck);

    // cleanup first
    this.cleanState();
    // create players based on the setup names / ids
    var names = [];
    for (var n in this.playerList) {
      names[n] = this.playerList[n].name;
    };
    this.createPlayers(names);
    // give out roles
    this.assignRoles( this.players );
    // give out cards
    this.assignCards( this.players, this.opt.initialCards );
    // pre-discard the set amout of cards
    this.discardFromGameDeck( this.gameDeck, this.opt.discardCards );
    // setup map 
    this.map = new Map( this.createMapOptions(false));
  },
  
  /**
   * Broadcasts a reset message to all clients with their respective state.
   */
  broadcastStartGame : function() {
    console.log('Broadcasting starting game', this.playerList);
    for (var i in this.playerList) {
      this.resetClientState(i);
    };
  },
  
   /**
   * Assigns a role to each player
   * @param {Array} players  Array of Player objects to assign them roles
   */
  assignRoles : function( players){
    for( var i in players ){
      players[i].private.roleCard = this.drawCard( this.roleDeck);
    };
  },
  
  /**
   * Assign the default number of starting cards to each player
   * @param {Array} players  Array of Player objects to assign them cards
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
   * @return {Array}  A list of Player classes
   */
  createPlayers : function( players ){
    var idx = 0;
    for( var i in players ){
      var opt = {
        public : {
          name  : players[i],
          id    : i,
          turn  : idx++
        }
      };
      this.players[i] = new Player( opt );
      this.turns.push(this.players[i].public.id);
    };
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
  
  /**
   * Replaces a set of cards from a player's hand.
   * @param playerID -- the target player 
   * @param cardID -- the card to replace
   * 
   * @return an array of the new cards (potentially empty)
   */
  replaceCards : function(playerID, cardIDs) {
    this.players[playerID].private.hand.remove(cardIDs);
    var newcards = [];
    
    for (var i in cardIDs) {
      var newCardID = this.drawCard(this.gameDeck);
      if (U.isUndefined(newCardID)) {
        break;
      };
      
      newcards.push(newCardID);
    };
    
    if (newcards) {
      this.players[playerID].private.hand.add(newcards);
    };
    
    return newcards;
  },
  
  /**
   * Performs an execute method of a specific event.
   * Is useful to make the execution code smaller and automated on server 
   * handlers.
   * 
   * @return whatever the event would return
   */
  execute : function(event) {
    return this.events[event.name].execute.call(this, event);
  },
  
  /**
   * Performs an check method of a specific event.
   * Is useful to make the execution code smaller and automated on server 
   * handlers.
   * 
   * @return whatever the event would return
   */
  check : function(event) {
    return this.events[event.name].check.call(this, event);
  },
  
  // HANDLERS
  handleDiscard : function(event) {
    var data = event.data;
    if (!this.prepareTurn(data.playerID)) return this.resolveError(data.playerID);
    
    if (this.execute(event)) {
      var newcards = this.replaceCards(data.playerID, data.cards);
      
      var extra = { newcards : newcards };
      this.resolveCorrect(data.playerID, event, extra);
      this.advanceTurn();
    } else {
      return this.resolveError(data.playerID);
    }
  },
  
  handleTargetPublicPlayer : function(event) {
    var data = event.data;
    if (!this.prepareTurn(data.playerID)) return this.resolveError(data.playerID);
    
    if (this.execute(event)) 
    {
      var newcards = this.replaceCards(data.playerID, [data.cardID]);
      
      var extra = { newcards : newcards };
      this.resolveCorrect(data.playerID, event, extra);
      this.advanceTurn();
    } else {
      this.resolveError(data.playerID);
    }
  },
  
  handleTargetPrivatePlayer : function(event) {
    var data = event.data;
    if (!this.prepareTurn(data.playerID)) return this.resolveError(data.playerID);
    
    var result = this.execute(event);
    if (!result) {
      if (null == result) {
        var player = this.players[data.playerID];
        if (!player.private.hand.has(data.cardID)) {
          return this.resolveError(data.playerID);
        };
        
        var card = F.get('game', data.cardID);
        var target = this.players[data.targetID];
        var extra = {};
        switch(card._className) {
        case 'Inspection':
          extra.roleCard = target.private.roleCard;
          
          var newcards = this.replaceCards(data.playerID, [data.cardID]);
          extra.newcards = newcards;
          break;
        case 'SwapHand':
          if (!player.private.hand.has(data.cardID)) {
            return this.resolveError(data.playerID);
          };
          
          var newcards = this.replaceCards(data.playerID, [data.cardID]);
          
          extra.newcards = newcards;
          
          var temp = player.private.hand.cards;
          player.private.hand.cards = target.private.hand.cards;
          target.private.hand.cards = temp;
          
          // TODO: need to also transmit to the other player and to everyone else...
          break;
        case 'SwapHats':
          // TODO: what if no more roles left...
          var newRole = this.drawCard(this.roleDeck);
          target.private.roleCard = newRole;
          extra.roleCard = newRole;
          break;
        default:
          throw new Error('Unexpected card played', card._className, card.id);
          break;
        }
        this.resolveCorrect(data.targetID, event, extra);
        this.advanceTurn();
      } else {
        this.resolveError(data.playerID);
      }
    } else {
      this.resolveError(data.playerID);
    }
  },
  
  handleTargetMap : function(event) {
    var data = event.data;
    if (!this.prepareTurn(data.playerID)) return this.resolveError(data.playerID);
    
    if (this.execute(event)) {
      var newcards = this.replaceCard(data.playerID, data.cardID);
      if (!U.isUndefined(newcards)) {
        var extra = { newcards : newcards };
      };
      
      this.resolveCorrect(data.playerID, event, extra);
      this.advanceTurn();
    } else {
      this.resolveError(data.playerID);
    }
  },
  
  handleHeal : function(event) {
    var data = event.data;
    if (!this.prepareTurn(data.playerID)) return this.resolveError(data.playerID);
    
    if (this.execute(event)) {
      // TODO: discarded by now, time to add back the cards...
      
      this.resolveCorrect(data.playerID, event, extra);
      this.advanceTurn();
    } else {
      this.resolveError(data.playerID);
    }
  },
  
  // HELPERS
  
  // -- STATE
  /**
   * Collects game state for a specific player. Gets public information on 
   * all players, as well as the number of cards they have in their hand.
   * Also adds all the private information for the respective player given.
   * 
   * @param playerID -- the player requested
   * @return {Object} the state as {map:_, players:_}
   */
  getGameState : function(playerID) {
    // public info on all people
    var players = U.each(this.players, function(k, v) { 
      return { 
        public  : v.public,
        private : {
          cards : new Array(v.private.hand.cards.length)
        }
      }
    });
    // private info on you
    players[playerID].private = this.players[playerID].private; 
    var state = {
      map     : this.map,
      players : players
    };
    return state;
  },
  
  /**
   * Communicates back to a specific playerID the error result of his 
   * communication.
   */
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
  
  /**
   * Communicates back to a specific playerID the correct result of his 
   * communication. Can also send back extra information along, as an update.
   * 
   * @param playerID -- the player to be targetted
   * @param prevEvent -- the event to which this is a response to, if required
   * @param eextra -- more information to be used as a update response data
   */
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
  
  /**
   * //TODO: think about it...
   */
  updateClientState : function(playerID, data) {
    
  },
  
  /**
   * Sends back a complete reset to a specific player with the current game
   * state.
   *
   * @param playerID -- the player to contact
   */
  resetClientState : function(playerID) {
    var event = Protocol.createEvent('reset', 'client', 'custom', this.getGameState(playerID));
    this.playerList[playerID].socket.emit('reset', event);
  }
});
