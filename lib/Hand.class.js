var Hand = Class.extend({
  _className : 'Hand',
  /**
   * 
   */
  init : function( ids ){
    U.extend( this, {
      cards : []
    });
    if( ids && ids.length > 0 ){
      this.add( ids );
    };
  },
  /**
   * Adds cards to the hand
   * @param {Array} cards - card IDs to be added to the hand
   * @return this
   */
  add : function( ids ){
    for( var i in ids ){
      this.cards.push( ids[i] );
    };
    return this;
  },
  /**
   * Checks whether a certain card (id) is in the hand
   * @param {Int} id
   * @return {Boolean}
   */
  has : function( id ){
    return this.cards.indexOf( id ) !== -1 ? true : false;
  },
  /**
   * Removes multiple card ids from hand
   * @param {Array} ids
   */
  remove : (function(){
    return function( ids ){
      for( var i in ids ){
        var pos = get.call( this, ids[i] );
        if( pos > -1 ){
          delete this.cards[pos];
        } else {
          logger.warn('[Hand.remove] Unknown id', arguments);
          return null;
        }
      }
      this.compact();
      return this;
    };
    function get( id ){
      return this.cards.indexOf( id );
    };
  })(),
  /**
   * Removes null/empty slots from hand
   */
  compact : function() {
    var newcards = [];
    for (var i in this.cards) {
      var cardID = this.cards[i];
      if ( undefined !== cardID ) {
        newcards.push(cardID);
      };
    };
    this.cards = newcards;
    return this;
  },
  /**
   * Check for all cards being selected are right
   * @param {Array} cardIDs
   * @return {Boolean}
   */
  validateCards : function( cardIDs ) {
    for (var i in cardIDs) {
      if( this.get( cardIDs[i] ) === null ){
        return false;
      };
    };
    return true;
  }
}); 
