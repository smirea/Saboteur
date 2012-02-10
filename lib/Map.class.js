
Map = Class.extend({
  _className  : 'Map',
  init        : (function(){
    return function( factory, options ){
      if( !options ){
        logger.warn('[Map.init] Invalid Options!');
        return null;
      };
      U.extend( this, {
        factory     : factory,
        maxCards    : 100,
        cards       : [],
        // potential starting points for reaching the goal; holds realIndex
        ladderCards : [],
        // The box in which cards are put already on the map
        // left-top-X/Y, right-top-X/Y
        boundaries  : { min_X:0, min_Y:0, max_X:0, max_Y:0 },
        startCards  : options.startCards || SO.options.startCards,
        goalCards   : options.goalCards || SO.options.goalCards
      });
      this.cards = this._createEmptyMap();
      add_starting_cards.apply( this );
    };
    function add_starting_cards(){
      for( var i in this.startCards ){
        this._insertCardAt( this.startCards[i][0], this.startCards[i][1], this.startCards[i][2] );
      };
      for( var i in this.goalCards ){
        this._insertCardAt( this.goalCards[i][0], this.goalCards[i][1], this.goalCards[i][2] );
      };
    };
  })(),
  _createEmptyMap : function() {
    var cards = [];
    for ( var i=0; i<this.maxCards*2; ++i ) {
        cards[i] = [];
    };
    return cards;
  },
  neighbour  : function( x, y, pos ){
    switch( pos ){
      case D.top:     y -= 1; break;
      case D.right:   x += 1; break;
      case D.bottom:  y += 1; break;
      case D.left:    x -= 1; break;
      default: 
        logger.warn( '[Map.neighbour] Unknown case', arguments );
        return null;
    }
    return {
      x : x,
      y : y
    };
  },
  checkSide : function( card_1, side_1, card_2, side_2 ){
    function p(v){ return v.hasPath; }
    return card_1.sides[side_1].hasPath == card_2.sides[side_2].hasPath;
  },
  _realIndex  : function( x, y ){
    return {
      x : this.maxCards + x,
      y : this.maxCards + y
    };
  },
  /**
   * Tells if there is a card at the absolute positions on the map given.
   *
   * @param posx -- the absolute x coordinate
   * @param posy -- the absolute y coordinate
   * @return true or false, if has or not a card
   */
  _isCardAt : function( posx, posy ) {
    var content = this.cards[posx][posy];
    return ( content ? true : false );
  },
  getCardAt  : function( x, y ){
    var pos = this._realIndex( x, y );
    if( pos.x >= 0 && pos.x <= this.maxCards * 2 && pos.y >= 0 && pos.y <= this.maxCards * 2 ){
      var cardInfo = this.cards[pos.x][pos.y];
      if (cardInfo) {
        return this.factory.get.apply(F, cardInfo);
      } else {
        return null;
      };
    } else {
      logger.warn( '[Map.getCardAt] Indexes out of bounds', arguments );
      return null;
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
    };
    
    return false;
  },
  removeCardAt : function( x, y ) {
    if( this.checkRemoveCardAt( x, y ) ){
      var card = this.getCardAt(x, y);
      var pos = this._realIndex(x, y);
      delete this.cards[pos.x][pos.y];
      // update ladderCards
      if (card.hasLadder) {
        for (var i in this.ladderCards) {
          var cur = this.ladderCards[i];
          if (cur.x === pos.x && cur.y === pos.y ) {
            this.ladderCards.splice(i, 1);
            break;
          };
        };
      };
      return card;
    };
    
    return false;
  },
  checkInsertCardAt : function(cardID, x, y) {
    return this._checkInsertCardAt(['game', cardID], x, y);
  },
  _checkInsertCardAt : function( cardWrapper, x, y ){
    var aPathCard = this.factory.get.apply(F, cardWrapper);
    var pos = this._realIndex( x, y );
    if( pos.x >= 0 && pos.y >= 0 ){
      if( aPathCard instanceof S.StartCard || aPathCard instanceof S.GoalCard ){
        return true;
      } else if( aPathCard instanceof S.PathCard ){
        if( null === this.getCardAt(x, y) ) {
          var ok            = true;
          var foreverAlone  = true;
          var directions    = [ D.top, D.right, D.bottom, D.left ];
          for( var i in directions ){
            var neighbourPos  = this.neighbour(x,y,directions[i]);
            var neighbour     = this.getCardAt( neighbourPos.x, neighbourPos.y );
            if( null !== neighbour ){
              var side = D.opposite( directions[i] );
              ok = ok && this.checkSide( aPathCard, directions[i], neighbour, side );
              foreverAlone = false;
            };
          };
          return ok && !foreverAlone;
        } else {
          logger.warn( '[Map.check] Must place card on empty slot', arguments );
        };
      } else {
        logger.warn( '[Map.check] Not an instance of PathCard', arguments );
      };
    };
    return false;
  },
  insertCardAt : function( cardID, x, y) {
    return this._insertCardAt([ 'game', cardID ], x, y);
  },
  _insertCardAt : function( cardWrapper, x, y ) { 
    if( x < this.boundaries.min_X ) this.boundaries.min_X = x;
    if( y < this.boundaries.min_Y ) this.boundaries.min_Y = y;
    if( x > this.boundaries.max_X ) this.boundaries.max_X = x;
    if( y > this.boundaries.max_Y ) this.boundaries.max_Y = y;
    var pos = this._realIndex( x, y );
    if( pos.x >= 0 && pos.y >= 0 ){
      if( this._checkInsertCardAt.apply( this, arguments ) ){
        // TODO: not sure if next line needed...
        if( !this.cards[pos.x] ){ this.cards[pos.y] = []; }
        this.cards[pos.x][pos.y] = cardWrapper;
        // update ladderCards
        var card = this.getCardAt(x, y);
        if (card.hasLadder) {
          this.ladderCards.push(pos);
        };
        return true;
      } else {
        logger.warn( '[Map.insertCardAt] Unable to place card on map', arguments );
        return false;
      };
    } else {
      logger.warn( '[Map.insertCardAt] Indexes out of bounds (max:'+this.maxCards+')', arguments );
      return false;
    };
  },
  canReachGold : function( player ) {
    var cards = this._createEmptyMap();
    var newTile = function(t, r, b, l) {
      // 0 is untouched, 1 is entered through here, 2 is finished checking
      var ret = {};
      ret[D.top] = t || 0;
      ret[D.right] = r || 0;
      ret[D.bottom] = b || 0;
      ret[D.left] = l || 0;
     return ret;
    };
    var finalStack = [];
    // pre-seed with ladder cards
    var startStack = U.extend([], this.ladderCards);
    for (var i in startStack) {
      var pos = startStack[i];
      var card = this.getCardAt(pos.x, pos.y);
      var sides = card.sides;
      var tile = newTile();
      for (var dir in sides) {
        var side = sides[dir];
        var neighbour = this.neighbour(pos.x, pos.y, dir);
        var canConnect = side.hasPath && this.isCardAt(neighbour.x, neighbour.y);
        if (canConnect) {
          tile[dir] = 2;
          finalStack.push(neighbour);
          cards[pos.x][pos.y][D.opposite(dir)] = 1;
        };
      };
      cards[pos.x][pos.y] = tile;
    };
    
    while (true) {
      //TODO: continue from here..
    };
    /*
    for (var i in startStack) {
      var pos = startStack[i];
      var card = this.getCardAt(pos.x, pos.y);
      var sides = card.sides;
      for (var dir in sides) {
        var side = sides[dir];
        var neighbour = this.neighbour(pos.x, pos.y, dir);
        var canConnect = side.hasPath && this.isCardAt(neighbour.x, neighbour.y);
        if (canConnect) {
          finalStack.push(neighbour);
          cards[pos.x][pos.y][dir] = true;
        };
      };
    };
    */
    
    // TODO: prode from here.....
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
