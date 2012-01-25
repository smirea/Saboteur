
var Saboteur = Class.extend({

  init  : function( options, cards ){
    var com = this.com;
    Utils.extend( com.opt, SaboteurOptions.options, options );
    Utils.extend( true, com.cards, SaboteurOptions.cards, cards );
    Utils.extend( com.gameDeckList, com.cards.path, com.cards.action );
    Utils.extend( com.roleDeckList, com.cards.role );
    
    com.gameDeck = this.make_deck( com.gameDeckList );
    com.roleDeck = this.make_deck( com.roleDeckList );
    this.shuffle( com.gameDeck );
    this.shuffle( this.shuffle );
    
    com.players = this.create_players( com.opt.players );
    this.assign_roles( com.players, com.roleDeck );
    this.assign_cards( com.players, com.gameDeck, com.opt.startingCards );
    this.discard_cards( com.gameDeck, com.opt.discardCards );
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
   * Discards cards from the top of the deck
   * @param {Array} deck  The deck to draw from
   * @return {Int} number The number of cards left
   */
  discard_cards : function( deck, number ){
    deck = deck || this;
    for( var i=0; i<number; ++i ){
      this.draw_card( deck );
    }
    return deck.length;
  },
  
  /**
   * Assigns a role to each player
   * @param {Array} players  Array of S.Player objects to assign them roles
   * @param {Array} deck  The deck to draw from
   */
  assign_roles : function( players, deck ){
    for( var i in players ){
      players[i].roleCard = this.draw_card( deck );
    }
  },
  
  /**
   * Assign the default number of starting cards to each player
   * @param {Array} players  Array of S.Player objects to assign them cards
   * @param {Array} deck  The deck to draw from
   * @param {Int} cards  Number of cards to assign
   */
  assign_cards : function( players, deck, cards ){
    for( var i in players ){
      for( var j = 1; j<=cards; ++j ){
        players[i].cards.push( this.draw_card( deck ) );
      }
    }
  },
  
  /**
   * Generates the list of player objects from com.opt.players into com.players
   * @param {Array} players  Array of player names
   * @return {Array}  A list of S.Player classes
   */
  create_players : function( players ){
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
  draw_card : function( deck ){
    return deck.pop();
  },
  
  /**
   * Creates a deck of card given a list of class names from the S. namespace
   * @param {Object} list  a list of (className : cardCount) pairs
   * @param {Object} namespace  An object containing the classes used - defaults to S
   */
  make_deck : function( list, namespace ){
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
  }
  
});
