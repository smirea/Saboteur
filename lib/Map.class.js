
S.Map = Class.extend({
  _className  : 'Map',
  init        : (function(){
    return function( options ){
      if( !options ){
        logger.warn('[Map.init] Invalid Options!');
        return null;
      }
      U.extend( this, {
        maxCards    : 100,
        cards       : [],
        // The box in which cards are put already on the map
        // left-top-X/Y, right-top-X/Y
        boundaries  : { min_X:0, min_Y:0, max_X:0, max_Y:0 },
        startCards  : options.startCards || SO.options.startCards,
        goalCards   : options.goalCards || SO.options.goalCards,
        factory     : options.factory
      });
      for( var i=0; i<this.maxCards*2; ++i ){
        this.cards[i] = [];
      };
      add_starting_cards.apply( this );
    };
    function add_starting_cards(){
      for( var i in this.startCards ){
        this.insertCardAt( this.startCards[i][0], this.startCards[i][1], this.startCards[i][2] );
      };
      for( var i in this.goalCards ){
        this.insertCardAt( this.goalCards[i][0], this.goalCards[i][1], this.goalCards[i][2] );
      };
    };
  })(),
  neighbour  : function( x, y, pos ){
    switch( pos ){
      case D.top:     y -= 1; break;
      case D.right:   x += 1; break;
      case D.bottom:  y += 1; break;
      case D.left:    x -= 1; break;
      default: 
        logger.warn( '[Map.neightbour] Unknown case', arguments );
        return null;
    }
    return [ x, y ];
  },
  checkSide : function( card_1, side_1, card_2, side_2 ){
    return card_1[side_1].hasSide == card_2[side_2].hasSide;
  },
  _realIndex  : function( x, y ){
    return {
      x : this.maxCards + x,
      y : this.maxCards + y
    };
  },
  getCardAt  : function( x, y ){
    var pos = this._realIndex( x, y );
    if( pos.x >= 0 && pos.x <= this.maxCards * 2 && pos.y >= 0 && pos.y <= this.maxCards * 2 ){
      return this.cards[pos.x][pos.y];
    } else {
      logger.warn( '[Map.getCardAt] Indexes out of bounds', arguments );
      return false;
    };
  },
  checkRemoveCardAt : function( x,y ){
    var card = this.getCardAt( x,y );
    if( card !== false ){
      if( card.destructible ){
        return true;
      } else {
        logger.warn('[Map.checkRemoveCardAt] Card is undestructible', arguments);
      }
    } else {
      logger.warn('[Map.checkRemoveCardAt] Indexes ouf of bounds', arguments);
    }
    return false;
  },
  removeCardAt : function( x, y ) {
    if( this.checkRemoveCardAt( x, y ) ){
      var card = this.positions[x][y];
      delete this.positions[x][y];
      return card;
    }
    return false;
  },
  check : function( aPathCard, x, y ){
    if( aPathCard instanceof S.PathCard ){
      if( U.isUndefined( this.getCardAt(x, y) ) ){
        for( var i in D ){
          var neightbour = this.neightbour(x,y,D[i]);
          var ok = true;
          var foreverAlone = true;
          if( !U.isUndefined( neightbour ) ){
            var pos = ( D[i] + 2 ) % 4;
            ok = ok && this.checkSide( aPathCard, D[i], neightbour, pos );
            foreverAlone = false;
          };
          return ok && !foreverAlone;
        };
      } else {
        logger.warn( '[Map.check] Must place card on empty slot', arguments );
        return false;
      };
    } else {
      logger.warn( '[Map.check] Not an instance of PathCard', arguments );
      return false;
    };
  },
  checkinsertCardAt : function( aPathCard, x, y ){
    if( new_x >= 0 && new_y >= 0 ){
      if( aPathCard instanceof S.StartCard || aPathCard instanceof S.GoalCard || this.check( aPathCard, new_x, new_y ) ){
        return true;
      };
    };
    return false;
  },
  insertCardAt : function( aPathCard, x, y ){
    if( x < this.boundaries.min_X ) this.boundaries.min_X = x;
    if( y < this.boundaries.min_Y ) this.boundaries.min_Y = y;
    if( x > this.boundaries.max_X ) this.boundaries.max_X = x;
    if( y > this.boundaries.max_Y ) this.boundaries.max_Y = y;
    var new_x = this.maxCards + x;
    var new_y = this.maxCards + y;
    if( new_x >= 0 && new_y >= 0 ){
      if( aPathCard instanceof S.StartCard || aPathCard instanceof S.GoalCard || this.check( aPathCard, new_x, new_y ) ){
        if( !this.cards[new_x] ){ this.cards[new_y] = []; }
        this.cards[new_x][new_y] = aPathCard;
        return true;
      } else {
        logger.warn( '[Map.insertCardAt] Unable to place card on map', arguments );
        return false;
      };
    } else {
      logger.warn( '[Map.insertCardAt] Indexes out of bounds (max:'+this.maxCards+')', arguments );
      return this;
    };
  },
  canReachGold : function( player ) {
    _CardState = Class.extend({
      init : function(aPos, aPathCard, aDir) {
        this.pos      = aPos;
        this.pathCard = aPathCard;
        this.dir      = aDir;
      }
    });
    //function(asd, ads)
    // this.startCards
    // 
                     // - start, goal, colorcard, playercolor.
                     // - card conn
    var stack = [];
    var reachedGoals = [];
    var exploredCards = {};

    // Loading start nodes
    for (var i in this.startCards) {
      var currCard = this.startCards[i];
      exploredCards[currCard[0].id] = true;

      for (var dir in currCard.sides) {
        currSide = currCard.sides[dir];
        if (currSide.hasLadder()) {
          // currCard [1], [2] are (x,y)
          var neighbour = this.neighbour( currCard[1], currCard[2], dir);
          if (neighbour) {
            stack.push(_CardState(neighbour,
                                  this.getCardAt(neighbour[0], neighbour[1]),
                                  D.opposite(dir)));
          }
        }
      }
    }

    // Running the algorithm and storing encountered goals
    while (stack) {
      elem = stack[stack.length()-1];
      stack.pop();
      currPos = elem.pos;
      currCard = elem.pathCard;
      currDir = elem.dir;

      if (exploredCards[currCard.id]) continue;
      exploredCards[currCard.id] = true;

      if (currCard instanceof S.GoalCard)
          reachedGoals.push(currPos);

      currNode = currCard.sides[dir];
      for (var i in currNode.links) {
        var neighbour = this.neighbour(currPos[0], currPos[1], currNode.links[i]);
        if (neighbour) {
            stack.push(_CardState(neighbour,
                                  this.getCardAt(neighbour[0], neighbour[1]),
                                  D.opposite(currNode.links[i])));
        }
      }
    }

    return reachedGoals;
  }
});
