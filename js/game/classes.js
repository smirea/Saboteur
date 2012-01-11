
var Player = Class.extend({
  name          : 'Player-Name',
  characterCard : null,
  cards         : [],
  activeCards   : [],
  lamp          : true,
  cart          : true,
  pickaxe       : true,
  jail          : false,
  canBuild      : function(){
    return (this.lamp && this.cart && this.pickaxe && !this.jail);
  }
});

var Card = Class.extend({
  name        : 'Card-Name',
  description : 'This card has no description',
  // Array of Classes on which this card can be used on
  usedOn      : [ Card ],
  front_cover : 'images/card.png',
  back_cover  : 'images/card_back.png',
  // Events:
  onDraw      : function( player ){},
  onPlay      : function( player, target ){}
});

var PathCard = Card.extend({
  usedOn  : [ PathCard ]
});

var GoalCard = Card.extend({
  
});