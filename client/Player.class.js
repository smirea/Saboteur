S.Player = S.Player.extend({
  init : function( name ){
    this._super( name );
    U.extend( this, {
      structure : {
        main  : $(document.createElement('div'))
        hand  : this.private.hand.toElement()
      }
    });
  },
  toElement : function(){
    return this.structure.main;
  }
});