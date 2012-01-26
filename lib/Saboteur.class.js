var Saboteur = Class.extend({

  init  : function( options, cards ){
    var com = this.com;
    Utils.extend( com.opt, SaboteurOptions.options, options );
    Utils.extend( true, com.cards, SaboteurOptions.cards, cards );
    Utils.extend( com.gameDeckList, com.cards.path, com.cards.action );
    Utils.extend( com.roleDeckList, com.cards.role );
    
    // create the card decks
    com.gameDeck = this.makeDeck( com.gameDeckList );
    com.roleDeck = this.makeDeck( com.roleDeckList );
    // shuffle them
    this.shuffle( com.gameDeck );
    this.shuffle( com.roleDeck );

    //TODO: need better logic for creating players    
    com.players = this.createPlayers( com.opt.players );
    // give out roles
    this.assignRoles( com.players, com.roleDeck );
    // give out cards
    this.assignCards( com.players, com.gameDeck, com.opt.startingCards );
    // pre-discard the set amout of cards
    this.discardCards( com.gameDeck, com.opt.discardCards );
  },
  
  // General multi-purpose object. Will store in it all information regarding the game
  com : {
    // {Array} list of all player objects
    players      : [],
    // {Array} the actual deck of cards for the game
    gameDeck     : [],
    // {Object} list containing the number of each type of action/path card in the game
    gameDeckList : {},
    // {Array} the actual deck of role cards
    roleDeck     : [],
    // {Object} list containing the number of each type of role card in the game
    roleDeckList : {},
    // {Array} bidimensional matrix containing the layout of the game
    map          : [],
    // {Object} the extended options object, stored for later use
    opt          : {},
    // {Object} the extended classes object, stored for later use
    cls          : {},
    // {Object} the extended cards object, stored for later use
    cards        : {}
  },
  
    /**
   * Assigns a role to each player
   * @param {Array} players  Array of S.Player objects to assign them roles
   * @param {Array} deck  The deck to draw from
   */
  assignRoles : function( players, deck ){
    for( var i in players ){
      players[i].roleCard = this.drawCard( deck );
    }
  },
  
  /**
   * Assign the default number of starting cards to each player
   * @param {Array} players  Array of S.Player objects to assign them cards
   * @param {Array} deck  The deck to draw from
   * @param {Int} cards  Number of cards to assign
   */
  assignCards : function( players, deck, cards ){
    for( var i in players ){
      for( var j = 1; j<=cards; ++j ){
        players[i].cards.push( this.drawCard( deck ) );
      }
    }
  },
  
  /**
   * Generates the list of player objects from com.opt.players into com.players
   * @param {Array} players  Array of player names
   * @return {Array}  A list of S.Player classes
   */
  createPlayers : function( players ){
    var arr = [];
    for( var i in players ){
      arr.push( new S.Player( players[i] ) );
    }
    return arr;
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
  }),
  
  /**
   * Given a deck a card, returns the top card and removes it from the deck;
   * @param {Array} deck  the deck of cards
   */
  drawCard : function( deck ){
    return deck.pop();
  },
  
  /**
   * Creates a deck of card given a list of class names from the S. namespace
   * @param {Object} list  a list of (className : cardCount) pairs
   * @param {Object} namespace  An object containing the classes used - defaults to S
   */
  makeDeck : function( list, namespace ){
    namespace = namespace || S;
    var arr = [];
    var c2 = 0;
    for( var i in list ){
      for( var j=0; j<list[i]; ++j ){
        if( namespace[i] ){
          arr.push( new namespace[i] );
        } else {
          console.warn( '[Unknown Class]: '+i );
        }
      }
    }
    return arr;
  },
  
  /**
   * Discards cards from the top of the deck
   * @param {Array} deck  The deck to draw from
   * @return {Int} number The number of cards left
   */
  discardCards : function( deck, number ){
    deck = deck || this;
    for( var i=0; i<number; ++i ){
      this.drawCard( deck );
    }
    return deck.length;
  }
});
