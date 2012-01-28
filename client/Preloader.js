var Preloader = {
  img       : {},
  _total    : 0,
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
      ++self._total;
      var img     = new Image();
      img.onload  = function(){
        self.img[ path ] = this;
        ++self._finished;
        callback.apply( self, [this] );
      };
      img.src     = path;
    } else {
      callback.apply( self, [self.img[img]] );
    }
    return this;
  }
}; 

if( typeof P == 'undefined' ) 
  var P = Preloader;