
var Saboteur = function( options, cards, classes ){
  
  // General multi-purpose object. Will store in it all information regarding the game
  var com = {
    // {Array} list of all player objects
    players           : [],
    // {Array} the actual deck of cards for the game
    gameDeck          : [],
    // {Object} list containing the number of each type of action/path card in the game
    gameDeckList      : {},
    // {Array} the actual deck of role cards
    roleDeck     : [],
    // {Object} list containing the number of each type of role card in the game
    roleDeckList : {},
    // {Array} bidimensional matrix containing the layout of the game
    map               : [],
    // {Object} the extended options object, stored for later use
    opt               : {},
    // {Object} the extended classes object, stored for later use
    cls               : {},
    // {Object} the extended cards object, stored for later use
    cards             : {}
  };
  
  Utils.extend( com.opt, SaboteurOptions.options, options );
  Utils.extend( true, com.cls, SaboteurOptions.classes, classes );
  Utils.extend( true, com.cards, SaboteurOptions.cards, cards );
  Utils.extend( com.gameDeckList, com.cards.path, com.cards.action );
  Utils.extend( com.roleDeckList, com.cards.role );
  
  com.gameDeck = shuffle( make_deck( com.gameDeckList ) );
  com.roleDeck = shuffle( make_deck( com.roleDeckList ) );
  this.com     = com;
  
  com.players = create_players( com.opt.players );
  assign_roles( com.players, com.roleDeck );
  assign_cards( com.players, com.gameDeck, com.opt.startingCards );
  discard_cards( com.gameDeck, com.opt.discardCards );
  
  // Private Methods
  
  /**
   * Discards cards from the top of the deck
   * @param {Array} deck  The deck to draw from
   * @return {Int} number The number of cards left
   */
  function discard_cards( deck, number ){
    for( var i=0; i<number; ++i ){
      draw_card( deck );
    }
    return deck.length;
  };
  
  /**
   * Assigns a role to each player
   * @param {Array} players  Array of S.Player objects to assign them roles
   * @param {Array} deck  The deck to draw from
   */
  function assign_roles( players, deck ){
    for( var i in players ){
      players[i].roleCard = draw_card( deck );
    }
  };
  
  /**
   * Assign the default number of starting cards to each player
   * @param {Array} players  Array of S.Player objects to assign them cards
   * @param {Array} deck  The deck to draw from
   * @param {Int} cards  Number of cards to assign
   */
  function assign_cards( players, deck, cards ){
    for( var i in players ){
      for( var j = 1; j<=cards; ++j ){
        players[i].cards.push( draw_card( deck ) );
      }
    }
  };
  
  /**
   * Generates the list of player objects from com.opt.players into com.players
   * @param {Array} players  Array of player names
   * @return {Array}  A list of S.Player classes
   */
  function create_players( players ){
    var arr = [];
    for( var i in players ){
      arr.push( new S.Player( players[i] ) );
    }
    return arr;
  };
  
  /**
   * Randomizes the elements in the array
   * @param {Array} arr
   */
  function shuffle( arr ){
    function randomSort(){ return Math.floor( Math.random()*3 )-1; };
    return arr.sort( randomSort );
    return arr;
  };
  
  /**
   * Given a deck a card, returns the top card and removes it from the deck;
   * @param {Array} deck  the deck of cards
   */
  function draw_card( deck ){
    return deck.pop();
  }
  
  /**
   * Creates a deck of card given a list of class names from the S. namespace
   * @param {Object} list  a list of (className : cardCount) pairs
   */
  function make_deck( list ){
    var arr = [];
    var c2 = 0;
    for( var i in list ){
      for( var j=0; j<list[i]; ++j ){
        if( S[i] ){
          arr.push( new S[i] );
        } else {
          console.warn( '[Unknown Class]: '+i );
        }
      }
    }
    return arr;
  };
  
};
