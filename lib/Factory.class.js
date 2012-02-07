/**
 * This is just a specialized container for the S. classes
 */
var Factory = F = {
  namespaces  : {},
  _total      : 0,
  /**
   * @param {Object} classes  (ClassName : Number_of_instances) pairs
   */
  register  : (function(){
    return function( classes ){
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
      var id = 0;
      for( var i in list ){
        for( var j=0; j<list[i]; ++j ){
          if( namespace[i] ){
            var card = new namespace[i];
            card.name = card._className.replace(/([A-Z])/g, " $1");
            card.id = id++;
            arr.push( card );
          } else {
            logger.warn( '[Unknown Class]: '+i );
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
    if( this.hasNamespace(namespace) ){
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
        if( this.hasNamespace(arguments[i]) ){
          c += this.getNamespaces(arguments[i]).length;
        };
      };
      return c;
    };
  },
  /**
   * @param {String} namespace  the namespace of the class
   * @param {Int} index  the index of the class within the namespace
   */
  get : function( namespace, index ){
    if( this.namespaces[namespace] && this.namespaces[namespace].length >= 0 ){
      if( index >= 0 && index < this.namespaces[namespace].length ){
        return this.namespaces[namespace][index];
      };
      logger.warn('[Factory.get] Index out of bounds', arguments);
    } else {
      logger.warn('[Factory.get] Unknown namespace', arguments);
    };
    
    return null;
  },
  /**
   * Gets a range of elements from a namespace
   * @param {String} namespace
   * @param {Int} start   [Optional] The start index - defaults to 0
   * @param {Int} end     [Optional] The end index - defaults to namespace.length
   * @return {Array}
   */
  getRange : function( namespace, start, end ){
    if( this.hasNamespace(namespace) ){
      if( start == null && end == null ){
        return this.getNamespaces( namespace );
      } else {
        start = start || 0;
        end   = end   || this.getNamespaces(namespace).length;
        var a = [];
        for( var i=start; i<end; ++i ){
          a.push( this.namespaces[namespace][i] );
        };
        return a;
      };
    } else {
      logger.warn('[Factory.getRange] Unknown namespace', arguments);
      return null;
    };
  },
  /**
   * Registers a new namespace
   * @param {String} namespace
   */
  addNamespace : function( namespace ){
    if( !this.hasNamespace(namespace) ){
      this.namespaces[namespace] = [];
    };
    return this;
  },
  /**
   * Checks whether a namespace exists
   * @param {String} namespace
   * @return {Bool}
   */
  hasNamespace : function( namespace ){
    var val = this.namespaces[namespace] !== undefined && this.namespaces[namespace] !== null;
    return this.namespaces[namespace] !== undefined && this.namespaces[namespace] !== null;
  },
  /**
   * Returns the namespace array if it exists
   * @param {String} namespace1[,namespace2,...]
   * @return {Array}
   */
  getNamespaces : function(){
    var arr = [];
    for( var i in arguments ){
      if( this.hasNamespace( arguments[i] ) ){
        arr = arr.concat( this.namespaces[arguments[i]] );
      } else {
        logger.warn('[Factory.getNamespaces] Unknown namespace', arguments);
        return null;
      }
    }
    return arr;
  },
};
