
var Saboteur = function( options, cards ){
  
  var com = {
    target            : $('body'),
    gameDeck          : [],
    gameDeckList      : {},
    characterDeck     : [],
    characterDeckList : {},
    opt               : {},
    cards             : {}
  };
  $.extend( com.opt, Saboteur.options, options );
  $.extend( true, com.cards, Saboteur.cards, cards );
  
  this.init = function( target ){
    $.extend( com.gameDeckList, com.cards.path, com.cards.action );
    $.extend( com.characterDeckList, com.cards.character );
    com.target        = target || com.target;
    com.opt           = options;
    com.cards         = cards;
    com.gameDeck      = shuffle( make_deck( com.gameDeckList ) );
    com.characterDeck = shuffle( make_deck( com.characterDeckList ) );
  };
  
  function shuffle( arr ){
    function randomSort(){ return Math.floor( Math.random()*3 )-1; }
    return arr.sort( randomSort );
  }
  
  function make_deck( list ){
    var arr = [];
    for( var i in list ){
      for( var j=0; j<list[i].length; ++j ){
        if( window[i] ){
          arr.push( new window[i] );
        } else {
          //TODO:: ERROR
        }
      }
    }
    return arr;
  }
  
};