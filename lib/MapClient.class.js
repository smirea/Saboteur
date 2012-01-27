
S.MapClient = S.Map.extend({
  _className  : 'MapClient',
  init : (function(){
    return function( options ){
      console.log( this );
      this._super( options );
      U.extend( this, {
        structure : {
          main  : $(document.createElement('div')),
          table : $(document.createElement('table'))
        }
      });
      create_map.apply( this );
    };
    function create_map(){
      var tr = $();
      for( var i=this.boundaries.min_Y; i<this.boundaries.max_Y; ++i ){
        var td = $();
        for( var j=this.boundaries.min_X; j<this.boundaries.max_X; ++j ){
          td = td.add( $(document.createElement('td')) );
          td.attr({
            'id'    : 'field_'+i+'_'+j,
            'class' : SaboteurOptions.classes
          });
        };
        tr = tr.add( $(document.createElement('tr')).append(td) );
      };
      this.structure.table.html( tr );
    };
  })(),
  insertCardAt: function( aPathCard, x, y ){
    this._super( aPathCard, x, y );
    this.structure.table.find( '#field_'+x+'_'+y ).html( aPathCard );
    return this;
  },
  toElement : function(){
    return this._element;
  }
});