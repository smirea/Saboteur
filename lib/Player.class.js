S.Player = Class.extend({
  _className    : 'Player',
  init          : function( name ){
    U.extend( this, {
      public        : {
        name          : name || 'Player-Name',
        id            : null,
        lamp          : [],
        cart          : [],
        pickaxe       : [],
        jail          : [],
        theft         : []
        },
      private       : {
        roleCard              : null,
        cards                 : [],
        getCardPosition       : function(cardID) {
          for (var i in this.cards) {
            if (this.cards[i].id == cardID) {
              return i;
            }
          }
          return null;
        }
      }
      
    });
  },
  setName         : function( name ) {
    this.public.name = name;
  },
  setId           : function(id) {
    this.public.id = id;
  },
  canBuild        : function(){
    return (this.public.lamp && this.public.cart && this.public.pickaxe && !this.public.jail);
  }
});
