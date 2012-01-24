
var S = {};

// Game Classes

S.Player = Class.extend({
  name          : 'Player-Name',
  characterCard : null,
  cards         : [],
  activeCards   : [],
  lamp          : true,
  cart          : true,
  pickaxe       : true,
  jail          : false,
  init          : function( name ){
    this.name = name || this.name;
  },
  canBuild      : function(){
    return (this.lamp && this.cart && this.pickaxe && !this.jail);
  }
});

S.Card = Class.extend({
  name        : 'Card-Name',
  description : 'This card has no description',
  // Array of Classes on which this card can be used on
  usedOn      : [ 'Card' ],
  front_cover : 'images/card.png',
  back_cover  : 'images/card_back.png',
  // Methods:
  toElement : function(){
    if( !this._element ){
      var h = '<div class="name">'+this.name+'</div>'+
              '<img src="'+this.front_cover+'" class="front-cover" />'+
              '<img src="'+this.back_cover+'" class="back-cover" />'+
              '<div class="description">'+this.description+'</div>';
      this._element = $(document.createElement('div'));
      this._element
        .data( 'card', this )
        .addClass( SaboteurOptions.classes.card )
        .html( h );
    }
    return this._element;
  },
  // Events:
  onDraw      : function( player ){},
  onPlay      : function( player, target ){}
});

S.GoalCard = S.Card.extend({
  
});
