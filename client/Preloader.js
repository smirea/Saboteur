var Preloader = {
  img       : {},
  _total    : 0,
  _finished : 0,
  multiLoad : function( array, onload_callback, onerror_callback ){
    for( var i in array ){
      this.load( array[i], onload_callback, onerror_callback );
    }
    return this;
  },
  load  : function( path, onload_callback, onerror_callback ){
    onload_callback   = onload_callback || function(){};
    onerror_callback  = onerror_callback || function(){};
    var self          = this;
    if( !self.img[path] ){
      ++self._total;
      var img     = new Image();
      img.onload  = function(){
        self.img[ path ] = this;
        ++self._finished;
        onload_callback.call( self, this );
      };
      img.onerror = function(){
        if( onerror_callback.call( self, this ) === false ){
          logger.warn('[Preloader.load] Unable to load image', arguments);
        };
      };
      img.src     = path;
    } else {
      onload_callback.call( self, self.get(path) );
    }
    return this;
  },
  get : function( name ){
    if( this.img[ name ] ){
      return this.img[ name ];
    } else {
      logger.warn('[Preloader.get] Unknown image name', arguments);
    };
  }
}; 

if( typeof P == 'undefined' ) 
  var P = Preloader;