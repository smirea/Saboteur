/**
 * This is just a specialized container for the S. classes
 */
var Factory = Class.extend({
  /**
   * @param {Object} classes  (ClassName : Number_of_instances) pairs
   */
  init  : (function(){
    return function( classes ){
      U.extend( this, {
        namespaces  : {},
        _total      : 0
      });
      for( var i in classes ){
        this.addNamespace( i );
        var arr = makeDeck( classes[i] );
        for( var j in arr ){
          this.add( i, arr[j] );
        };
      };
    };
    /**
    * Creates a deck of card given a list of class names from the S. namespace
    * @param {Object} list  a list of (className : cardCount) pairs
    * @param {Object} namespace  An object containing the classes used - defaults to S
    */
    function makeDeck( list, namespace ){
      namespace = namespace || S;
      var arr = [];
      var c2 = 0;
      for( var i in list ){
        for( var j=0; j<list[i]; ++j ){
          if( namespace[i] ){
            arr.push( new namespace[i] );
          } else {
            console.warn( '[Unknown Class]: '+i );
          };
        };
      };
      return arr;
    };
  })(),
  /**
   * @param {String} namespace
   * @param {Class} aClass
   */
  add : function( namespace, aClass ){
    if( this.namespaces[namespace] ){
      this.namespaces[namespace].push( aClass );
      ++this._total;
    } else {
      logger.warn('[Factory.get] Unknown namespace', arguments);
    }
    return this;
  },
  /**
   * Returns the number of elements in the factory
   * @param {String} namespace1[,namespace2...]  The names of the namespaces to return the combined total
   * @return {Int}
   */
  size : function(){
    if( arguments.length == 0 ){
      return this._total;
    } else {
      var c = 0;
      for( var i in arguments ){
        if( this.namespaces[arguments[i]] ){
          c += this.namespaces[arguments[i]].length;
        }
      }
      return c;
    }
  },
  /**
   * @param {String} namespace  the namespace of the class
   * @param {Int} index  the index of the class within the namespace
   */
  get : function( namespace, index ){
    if( this.namespaces[namespace] ){
      if( index >= 0 && index < this.namespaces[namespace].length ){
        return this.namespaces[namespace][index];
      }
      logger.warn('[Factory.get] Index out of bounds', arguments);
    } else {
      logger.warn('[Factory.get] Unknown namespace', arguments);
    }
  },
  /**
   * Registers a new namespace
   * @param {String} name
   */
  addNamespace : function( name ){
    if( !this.namespaces[name] ){
      this.namespaces[name] = [];
    }
    return this;
  }
});