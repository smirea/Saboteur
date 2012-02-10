var S = {};
var U = {};
var Deck = {
  start     : 0,
  goal      : 1,
  dummyGoal : 2,
  game      : 3,
  role      : 4

};
var D = {
  top        : 0,
  right      : 1,
  bottom     : 2,
  left       : 3,
  opposite   : function(aDirection) {
    return (aDirection + 2) % 4;
  },
};


(function(){
  
  U = {
    print : (function(){
      function pad( str, len ){
        var h = '';
        for( var i=0; i<len; ++i ){ h += str; }
        return h;
      };
      function wrap( str, type ){
        switch( type ){
          case "string":  return '"'+str+'"';
          case "object":  return '{'+str+'}';
          case "array":   return '['+str+']';
          default: return str;
        }
      };
      function createString( obj, uglyPrint, recursionDepth, indent ){
        recursionDepth = recursionDepth || 10;
        if( obj == null ){
          return 'null';
        };
        if( recursionDepth <= 0 ){
          return '';
        }
        var type = U.type(obj);
        var arr = [];
        switch( type ){
          case 'object':
          case 'array':
            var content = null;
            if( !uglyPrint ){
              indent = indent || 2;
              for( var i in obj ){
                arr.push(
                  pad(' ', indent)+i+' : '+createString( obj[i], uglyPrint, recursionDepth-1, indent+2 )
                );
              } 
              content =  "\n"+(arr.join(", \n"))+"\n"+pad(' ',indent-2);
            } else {
              for( var i in obj ){
                arr.push(i+':'+createString(obj[i], uglyPrint, recursionDepth-1) );
              }
              content = arr.join(",");
            };
            return wrap( content, type );
          default:
            return wrap( obj.toString(), type );
        };
      };
      return function(obj, uglyPrint, recursionDepth){
        (logger || console).log( createString( obj, uglyPrint, recursionDepth, 0 ) );
      }
    })(),
    each : function(object, callback) {
      object = U.extend(true, {}, object);
      for (var i in object) {
        var ret = callback.call(object[i], i, object[i]);
        object[i] = ret !== undefined ? ret : object[i];
      }
      return object;
    },
    type : (function(){
      var types       = "Boolean Number String Function Array Date RegExp Object".split(" ");
      var class2type  = {};
      for( var i in types ) {
        class2type[ "[object " + types[i] + "]" ] = types[i].toLowerCase();
      };
      var toString = Object.prototype.toString;
      return function ( obj ){
        return obj == null ?
          String( obj ) :
          class2type[ toString.call(obj) ] || "object";
      };
    })(),
    isUndefined: function( obj ){
      return typeof obj == 'undefined';
    },
    isNumeric: function( obj ) {
      return !isNaN( parseFloat(obj) ) && isFinite( obj );
    },
    isFunction: function( obj ) {
      return U.type(obj) === "function";
    },
    isArray: Array.isArray || function( obj ) {
      return U.type(obj) === "array";
    },
    isWindow: function( obj ) {
      return obj && typeof obj === "object" && "setInterval" in obj;
    },
    isPlainObject: function( obj ){
      // Must be an Object.
      // Because of IE, we also have to check the presence of the constructor property.
      // Make sure that DOM nodes and window objects don't pass through, as well
      if ( !obj || U.type(obj) !== "object" || obj.nodeType || U.isWindow( obj ) ) {
        return false;
      }
      try {
        // Not own constructor property must be Object
        if ( obj.constructor &&
          !hasOwn.call(obj, "constructor") &&
          !hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
          return false;
        }
      } catch ( e ) {
        // IE8,9 Will throw exceptions on certain host objects #9897
        return false;
      }
      // Own properties are enumerated firstly, so to speed up,
      // if last one is own, then all properties are own.
      var key;
      for ( key in obj ) {}
      return key === undefined || hasOwn.call( obj, key );
    },
    objectLength: function( obj ){
      var c = 0;
      for( var i in obj ){ ++c; };
      return c;
    },
    extend : function(){
      if( arguments[0] === true ){
        for( var i=2; i<arguments.length; ++i ){
          for( var j in arguments[i] ){
            if( typeof arguments[i][j] === "object" ){
              arguments[1][j] = arguments[1][j] || (U.isArray(arguments[i][j]) ? [] : {});
              U.extend( true, arguments[1][j], arguments[i][j] );
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
    },
    /**
     * Cookie plugin
     *
     * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
     * Dual licensed under the MIT and GPL licenses:
     * http://www.opensource.org/licenses/mit-license.php
     * http://www.gnu.org/licenses/gpl.html
     * @note minor modified script of Klaus Hartl's jQuery Cookie plugin
     */
    cookie : function(key, value, options) {
      // key and at least value given, set cookie...
      if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
        options = U.extend({}, options);
        if (value === null || value === undefined) {
          options.expires = -1;
        }
        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        value = String(value);
        return (document.cookie = [
          encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
          options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
          options.path    ? '; path=' + options.path : '',
          options.domain  ? '; domain=' + options.domain : '',
          options.secure  ? '; secure' : ''
        ].join(''));
      }

      // key and possibly options given, get cookie...
      options = value || {};
      var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

      var pairs = document.cookie.split('; ');
      for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
        if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
      }
      return null;
    }
  };
  
})();
