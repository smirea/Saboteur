
S.MapClient = S.Map.extend({
  _className  : 'MapClient',
  init : (function(){
    return function( options ){
      U.extend( this, {
        structure : {
          main  : $(document.createElement('div')),
          table : $(document.createElement('table'))
        }
      });
      this._super( options );
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
          if( !U.isUndefined(card) ) element = card;
            else {
              element = new S.Card();
              element.name = 'Empty Slot';
            }
          td = td.add(
            $(document.createElement('td')).attr({
              'id'    : id,
              'class' : SO.classes.mapTD
            }).html( element.toElement() )
          );
          element.rotate( 90 );
        };
        tr = tr.add( $(document.createElement('tr')).append(td) );
      };
      this.structure.table
        .attr({
          'class'       : SO.classes.table,
          'cellspacing' : 0,
          'cellpadding' : 0
        })
        .html( tr );
    };
  })(),
  insertCardAt: function( aPathCard, x, y ){
    this._super( aPathCard, x, y );
    this.structure.table.find( '#field_'+x+'_'+y ).html( aPathCard.toElement() );
    aPathCard.rotate( aPathCard.isFlipped ? 90 : 270 );
    return this;
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