
var S     = {};
var Utils = {};
var D     = {
  top     : 0,
  right   : 1,
  bottom  : 2,
  left    : 3
};

(function(){
  
  Utils = {
    print : function( obj, prettyPrint ){
      console.log( obj, Utils.type(obj) );
      switch( Utils.type(obj) ){
        case 'array':
          return '['+obj+']';
        case 'object':
          var arr = [];
          if( prettyPrint ){
            for( var i in obj ){
              arr.push(i+' : '+Utils.print( obj[i], true ) );
            } 
            return "[\n"+(arr.join(", \n"))+"\n]";
          } else {
            for( var i in obj ){
              console.log( obj[i] );
              arr.push(i+':'+Utils.print(obj[i], false) );
            } 
            return "{"+arr.join(", ")+"}";
          }
        default:
          return obj.toString();
      }
    },
    type : (function(){
      var class2type = {};
      var types = "Boolean Number String Function Array Date RegExp Object".split(" ");
      for( var i in types ){
        class2type[ "[object " + types[i] + "]" ] = types[i].toLowerCase();
      }
      return function( obj ) {
        return typeof obj == 'object' ? class2type[ obj.toString() ] : "object";
      };
    })(),
    isUndefined: function( obj ){
      return typeof obj == 'undefined';
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
    error : function( msg ) {
      throw new Error( msg );
    }
  };
  
})();