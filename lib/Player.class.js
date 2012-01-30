S.Player = Class.extend({
  _className    : 'Player',
  init          : function( name ){
    U.extend( this, {
      public        : {
        name    : name || 'Player-Name',
        id      : null,
        lamp    : [],
        cart    : [],
        pickaxe : [],
        jail    : [],
        theft   : []
        },
      private       : {
        roleCard  : null,
        hand      : new Hand()
      }
    });
  },
  setName         : function( name ) {
    this.public.name = name;
    return this;
  },
  setId           : function(id) {
    this.public.id = id;
    return this;
  },
  canBuild        : function(){
    return (this.public.lamp && this.public.cart && this.public.pickaxe && !this.public.jail);
  }
});
