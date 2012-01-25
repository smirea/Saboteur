S.Player = Class.extend({
  name          : 'Player-Name',
  roleCard      : null,
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