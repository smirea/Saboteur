S.Player = Class.extend({
  _className    : 'Player',
  init          : function( name ){
    U.extend( this, {
      name          : name || 'Player-Name',
      id            : null,
      roleCard      : null,
      lamp          : true,
      cart          : true,
      pickaxe       : true,
      jail          : false,
      theft         : 0,
      cards         : []
    });
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
