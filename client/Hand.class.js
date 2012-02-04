
var Hand = Hand.extend({
  cards : {},
  init  : (function(){
    return function( ids ){
      U.extend( this, {
        structure : {
          main  : $(document.createElement('div')),
          cards : $(document.createElement('div'))
        }
      });
      this._super( ids );
      create_structure.call( this );
    };
    
    function create_structure(){
      this.structure.cards
        .addClass( SO.classes.hand.cards );
        
      this.structure.main
        .addClass( SO.classes.hand.main )
        .append( this.structure.cards );
    };
  })(),
  add : function( ids ){
    if( this._super( ids ) ){
      for( var i in ids ){
        this.structure.cards.append( F.get( 'game', ids[i]).toElement() );
      }
      return this;
    };
    return null;
  },
  remove : function( ids ){
    if( this._super( ids ) ){
      for( var i in ids ){
        F.get( 'game', ids[i]).detach();
      };
      return this;
    };
    return null;
  },
  toElement : function(){
    return this.structure.main;
  }
});