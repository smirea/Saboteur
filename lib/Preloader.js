var Preloader = {
  img       : {},
  _pending  : 0,
  _finished : 0,
  multiLoad : function( array, callback ){
    for( var i in array ){
      this.load( array[i], callback );
    }
    return this;
  },
  load  : function( path, callback ){
    var self    = this;
    if( !self.img[path] ){
      ++self._pending;
      var img     = new Image();
      img.onload  = function(){
        --self._pending;
        self[ path ] = this;
        callback.apply( this );
        ++self._finished;
      };
      img.src     = path;
    } else {
      callback.apply( self.img[img] );
      ++self._finished;
    }
    return this;
  }
}; 

if( typeof P == 'undefined' ) 
  var P = Preloader;