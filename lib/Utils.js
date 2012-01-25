
var S     = {};
var Utils = {};

(function(){
  
  var class2type = {};
  var types = "Boolean Number String Function Array Date RegExp Object".split(" ");
  for( var i in types ){
    class2type[ "[object " + types[i] + "]" ] = types[i].toLowerCase();
  }
  
  Utils = {
    type : function( obj ) {
      return obj == null ?
        String( obj ) :
        class2type[ toString.call(obj) ] || "object";
    },
    isNumeric: function( obj ) {
      return !isNaN( parseFloat(obj) ) && isFinite( obj );
    },
    isFunction: function( obj ) {
      return Utils.type(obj) === "function";
    },
    isArray: Array.isArray || function( obj ) {
      return Utils.type(obj) === "array";
    },
    extend : function(){
      if( arguments[0] === true ){
        for( var i=2; i<arguments.length; ++i ){
          for( var j in arguments[i] ){
            if( typeof arguments[i][j] === "object" && arguments[1][j] !== null ){
              arguments[1][j] = arguments[1][j] || (Utils.isArray(arguments[1][j]) ? [] : {});
              Utils.extend( true, arguments[1][j], arguments[i][j] );
            } else {
              arguments[1][j] = arguments[i][j];
            }
          }
        }
        return arguments[1];
      } else {
        for( var i=1; i<arguments.length; ++i ){
          for( var j in arguments[i] ){
            arguments[0][j] = arguments[i][j];
          }
        }
      }
      return arguments[0];
    },
    preload_image : function( path, callback ){
      var img     = new Image();
      img.onload  = callback;
      img.src     = path;
      return img;
    },
    error : function( msg ) {
      throw new Error( msg );
    }
  };
  
})();