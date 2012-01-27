S.Player = Class.extend({
  name          : 'Player-Name',
  id            : null,
  roleCard      : null,
  cards         : [],
  lamp          : true,
  cart          : true,
  pickaxe       : true,
  jail          : false,
  theft         : 0,
  init          : function( name ){
    this.name = name || this.name;
  },
  setName       : function( name ) {
    this.name = name;
  },
  setId         : function(id) {
    this.id = id;
  },
  canBuild      : function(){
    return (this.lamp && this.cart && this.pickaxe && !this.jail);
  }
});
