
var Hand = Hand.extend({
  cards : {},
  init  : (function(){
    return function( cards ){
      this._super( cards );
      U.extend( this, {
        structure : {
          main    : $(document.createElement('div'))
        }
      });
      create_structure.call( this );
    };
    
    function create_structure(){
      this.structure.main
        .addClass( SO.classes.hand )
    };
  })(),
  add : function( id ){
    this._super( id );
  },
  toElement : function(){
    return this.structure.main;
  }
});