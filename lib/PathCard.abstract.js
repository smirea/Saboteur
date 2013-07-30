(function(){
  var Node = Class.extend({
    init    : function(hasPath, links) {
      this.hasPath = hasPath || false;
      this.links  = links || {};
    },
    hasPath  : false,
    links    : {} // D.xxx : true if link exists
  });

  S.PathCard = S.MapCard.extend({
    _className : 'PathCard',
    target     : 'DummyCard', 
    init       : function() {
      this._super();
      U.extend(this, {
        destructible  : true,
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
    
      Logger.warn(this._className, 'Failed doing action');
      return false;
    },
    isFlipped : false,
    flip      : function() {
      this.isFlipped  = !this.isFlipped;
      
      var newlinks = {};
      for (var side in this.sides) {
        newlinks[side] = {};
      };
      
      for (var side in this.sides) {
        for (var link in this.sides[side].links) {
          if (this.sides[side].links[link]) {
            newlinks[D.opposite(side)][D.opposite(link)] = this.sides[side].links[link];
          };
        };
      };
      
      var paths = [];
      for(var side in this.sides) {
        this.sides[side].links = newlinks[side];
        paths.push( this.sides[side].hasPath );
      };
      paths = [].concat( paths.slice(2), paths.slice(0,2) );
      for( var i in this.sides ){
        this.sides[side].hasPath = paths[i];
      }
      return this;
    },
    connect   : function(side, sides) {
      for(s in sides) {
        //this.sides[side].links[sides[s]] = this.sides[s];
        this.sides[side].links[sides[s]] = true;
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
