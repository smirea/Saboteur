
S.Map = Class.extend({
  init    : function() {
    U.extend( this, {
      cards   : []
    });
  },
  cardAt  : function( x, y ){
    if( x >= 0 && y >= 0 ){
      return this.cards[x][y];
    } else {
      logger.warn( '[Map.cardAt] Indexes out of bounds', arguments );
      return null;
    }
  },
  neightbour  : function( x, y, pos ){
    switch( pos ){
      case D.top:     y -= 1; break;
      case D.right:   x += 1; break;
      case D.bottom:  y += 1; break;
      case D.left:    x -= 1; break;
      default: 
        logger.warn( '[Map.neightbour] Unknown case', arguments );
        return null;
    }
    return this.cardAt( x, y );
  },
  removeCardAt : function( x, y ) {
    delete this.positions[x][y];
  },
  checkSide : function( card_1, side_1, card_2, side_2 ){
    return card_1[side_1].hasSide == card_2[side_2].hasSide;
  },
  check : function( aPathCard, x, y ){
    if( aPathCard instanceof S.PathCard ){
      if( U.isUndefined( this.cartAt(x, y) ) ){
        for( var i in D ){
          var neightbour = this.neightbour(x,y,D[i]);
          var ok = true;
          var foreverAlone = true;
          if( !U.isUndefined( neightbour ) ){
            var pos = ( D[i] + 2 ) % 4;
            ok = ok && this.checkSide( aPathCard, D[i], neightbour, pos );
            foreverAlone = false;
          }
          return ok && !foreverAlone;
        }
      } else {
        logger.warn( '[Map.check] Must place card on empty slot', arguments );
        return false;
      }
    } else {
      logger.warn( '[Map.check] Not an instance of PathCard', arguments );
      return false;
    }
  },
  insert : function( aPathCard, x, y ){
    if( this.check( aPathCard, x, y ) ){
      if( !this.cards[x] ){
        this.cards[x] = [];
      }
      this.cards[x][y] = aPathCard;
      return true;
    } else {
      logger.warn( '[Map.insert] Unable to place card on map', arguments );
      return false;
    }
  }
});
