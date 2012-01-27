S.Player = Class.extend({
  _className    : 'Player',
  init          : function( name ){
    U.extend( this, {
      public        : {
        name          : name || 'Player-Name',
        id            : null,
        lamp          : null,
        cart          : null,
        pickaxe       : null,
        jail          : null,
        theft         : []
        },
      private       : {
        roleCard      : null,
        cards         : []
      }
      
    });
  },
  setName       : function( name ) {
    this.public.name = name;
  },
  setId         : function(id) {
    this.public.id = id;
  },
  canBuild      : function(){
    return (this.public.lamp && this.public.cart && this.public.pickaxe && !this.public.jail);
  }
});
