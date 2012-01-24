
var Saboteur = function( options, cards, classes ){
  
  // General multi-purpose object. Will store in it all information regarding the game
  var com = {
    // {jQuery} the container element for the UI
    target            : $('body'),
    // {Array} list of all player objects
    players           : [],
    // {Array} the actual deck of cards for the game
    gameDeck          : [],
    // {Object} list containing the number of each type of action/path card in the game
    gameDeckList      : {},
    // {Array} the actual deck of character cards
    characterDeck     : [],
    // {Object} list containing the number of each type of role card in the game
    characterDeckList : {},
    // {Array} bidimensional matrix containing the layout of the game
    map               : [],
    // {Object} namespace containing references to all major components in the UI
    structure         : {
      // {jQuery} the main wrapper
      main  : $(document.createElement('div')),
      // {jQuery} will hold the display of com.map
      map   : $(document.createElement('div'))
    },
    // {Object} the extended options object, stored for later use
    opt               : {},
    // {Object} the extended classes object, stored for later use
    cls               : {},
    // {Object} the extended cards object, stored for later use
    cards             : {}
  };
  
  $.extend( com.opt, SaboteurOptions.options, options );
  $.extend( true, com.cls, SaboteurOptions.classes, classes );
  $.extend( true, com.cards, SaboteurOptions.cards, cards );
  $.extend( com.gameDeckList, com.cards.path, com.cards.action );
  $.extend( com.characterDeckList, com.cards.character );
  
  com.target        = com.opt.target || com.target;
  com.gameDeck      = shuffle( make_deck( com.gameDeckList ) );
  com.characterDeck = shuffle( make_deck( com.characterDeckList ) );
  this.com          = com;
  
  create_players();
  assign_roles();
  assign_cards();
  discard_cards();
  build_layout();
  
  
  // Private Methods
  
  function build_layout(){
    com.structure.main
      .addClass( com.cls.main )
      .append( com.structure.map );
    
    generate_map();
      
    com.target.html( com.structure.main );
  };
  
  function generate_map(){
    for( var i=0; i<com.opt.layout.height; ++i ){
      com.map[i] = [];
      var row = $(document.createElement('div'));
      for( var j=0; j<com.opt.layout.width; ++j ){
        com.map[i][j] = new S.BaseLayoutCard();
        row.append( com.map[i][j].toElement() );
      }
      com.structure.map.append( row );
    }
  }
  
  /**
   * Discards cards from the top of the gameDeck
   */
  function discard_cards(){
    for( var i=0; i<com.opt.discardCards; ++i ){
      draw_card( com.gameDeck );
    }
  };
  
  /**
   * Assigns a role to each player
   */
  function assign_roles(){
    for( var i in com.players ){
      com.players[i].characterCard = draw_card( com.characterDeck );
    }
  };
  
  /**
   * Assign the default number of starting cards to each player
   */
  function assign_cards(){
    for( var i in com.players ){
      for( var j = 1; j<=com.opt.startingCards; ++j ){
        com.players[i].cards.push( draw_card( com.gameDeck ) );
      }
    }
  };
  
  /**
   * Generates the list of player objects from com.opt.players into com.players
   */
  function create_players(){
    for( var i in com.opt.players ){
      com.players.push( new S.Player( com.opt.players[i] ) );
    }
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