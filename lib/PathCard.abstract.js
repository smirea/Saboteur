(function(){
  var Node = Class.extend({
    init    : function(hasPath, links) {
      this.hasPath = hasPath || false;
      this.links  = links || {};
    },
    hasPath  : false,
    links    : {}
  });

  S.PathCard = S.MapCard.extend({
    _className : 'PathCard',
    target     : 'DummyCard', 
    init       : function() {
      this._super();
      U.extend(this, {
        destructible  : false,
        sides         :  {}
      });
      for (var i in [D.top, D.right, D.bottom, D.left]) {
        this.sides[i] = new Node();
      };
    },
    execute   : function(dryrun, map, posx, posy, flipped) {
      if (this.isFlipped != flipped) {
        this.flip();
      };
      if (dryrun) {
        return map.checkInsertCardAt(this.id, posx, posy);
      } else {
        return map.insertCardAt(this.id, posx, posy);
      };
    
      logger.warn(this._className, 'Failed doing action');
      return false;
    },
    isFlipped : false,
    flip      : function() {
      this.isFlipped  = !this.isFlipped;
      var temp        = this.sides[D.top];
      this.sides[D.top]   = this.sides[D.bottom];
      this.sides[D.bottom]   = temp;

      var temp        = this.sides[D.right];
      this.sides[D.right]   = this.sides[D.left];
      this.sides[D.left]   = temp;
      return this;
    },
    connect   : function(side, sides) {
      for(s in sides) {
        this.sides[side].links[sides[s]] = this.sides[s];
      }
      return this;
    },
    nodes : function(){
      for( var i in arguments ){
        this.sides[arguments[i]].hasPath = true;
      }
      return this;
    }
  });
})();