
var ClientMap = Map.extend({
  _className  : 'ClientMap',
  init : (function(){
    return function( factory, options ){
      U.extend( this, {
        structure : {
          main  : $(document.createElement('div')),
          table : $(document.createElement('table'))
        }
      });
      this._super( factory, options );
      create_map.apply( this );
      this.structure.main.append( this.structure.table );
    };
    function create_map(){
      var tr    = $();
      for( var y=this.boundaries.min_Y; y<=this.boundaries.max_Y; ++y ){
        var td = $();
        for( var x=this.boundaries.min_X; x<=this.boundaries.max_X; ++x ){
          var id = 'field_'+x+'_'+y;
          var card = this.getCardAt( x, y );
          var element;
          if( card !== null ) {
            element = card;
          } else {
            element = new S.Card();
            element.name = 'Empty Slot';
          };
          td = td.add(
            $(document.createElement('td')).attr({
              'id'    : id,
              'class' : SO.classes.map.td
            }).html( element.toElement().data('pos',[x,y]) )
          );
          element.rotate( 90 );
        };
        tr = tr.add( $(document.createElement('tr')).append(td) );
      };
      this.structure.table
        .attr({
          'class'       : SO.classes.map.table,
          'cellspacing' : 0,
          'cellpadding' : 0
        })
        .html( tr );
    };
  })(),
  _insertCardAt : function( cardWrapper, x, y ){
    if( this._super( cardWrapper, x, y ) ){
      var aPathCard = this.factory.get.apply( this.factory, cardWrapper );
      var elem      = aPathCard.toElement();
      var elemPos   = this.structure.table.find( '#field_'+x+'_'+y );
      elem.data( 'swap-card', elemPos );
      elemPos.html( elem );
      aPathCard.rotate( aPathCard.isFlipped ? 90 : 270 );
      aPathCard.structure.rotate.hide();
      return true;
    }
    return false;
  },
  removeCardAt: function( x, y ){
    var card = this._super( x, y );
    if( card === false ){
      card.detach();
    } else {
      logger.warn( '[MapClient.removeCardAt] Unable to remove card', arguments );
    }
  },
  toElement : function(){
    return this.structure.main;
  }
});
