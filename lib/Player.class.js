Player = Class.extend({
  _className    : 'Player',
  init          : function( attributes, handClass ){
    handClass = handClass || Hand;
    var defaults = {
      public : {
        name    : 'Player-Name',
        id      : null,
        turn    : 0,
        playing : false,
        lamp    : [],
        cart    : [],
        pickaxe : [],
        jail    : [],
        theft   : []
        },
      private : {
        roleCard  : null,
        hand      : {}
      }
    };
    U.extend( true, this, defaults, attributes);
    var args = this.private.hand.cards ? this.private.hand.cards : [];
    this.private.hand = new handClass( args );
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
    return (!this.public.lamp.length 
      && !this.public.cart.length 
      && !this.public.pickaxe.length 
      && !this.public.jail.length);
  }
});
