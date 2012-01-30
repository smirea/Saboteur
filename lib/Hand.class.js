var Hand = Class.extend({
  /**
   * 
   */
  init : function( cards ){
    U.extend( this, {
      cards : []
    });
    if( cards ){
      for( var i in cards ){
        this.add( cards[i] );
      };
    };
  },
  /**
   * Adds cards to the hand
   */
  add : function(){
    for( var i in arguments ){
      this.cards.push( arguments[i] );
    }
    return this;
  },
  /**
   * Selects a card from the hand by id
   * @param {Int} id
   * @return {Int} the position in the hand or null
   */
  get : function( id ){
    for( var i=0; i<this.cards.length; ++i ){
      if( this.cards[i] == id ){
        return i;
      };
    };
    logger.warn('[Hand.get] No card in hand with that it', arguments);
    return null;
  },
  /**
   * Removes multiple card ids from hand
   * @param {Array} ids
   */
  remove : function( ids ){
    for( var i in ids ){
      var pos = this.get( ids[i] );
      if( pos !== null ){
        delete this.cards[pos];
      } else {
        logger.warn('[Hand.remove] Unknown id', arguments);
        return null;
      }
    }
    this.compact();
    return this;
  },
  /**
   * Removes null/empty slots from hand
   */
  compact : function() {
    var newcards = [];
    for (var i in this.cards) {
      var pos = this.cards[i];
      if ( pos ) {
        newcards.push(card);
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
