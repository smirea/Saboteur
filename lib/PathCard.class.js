
S.PathCard = S.Card.extend({
  init      : function() {
    this.sides = [
      new S._PathEdge(),
      new S._PathEdge(),
      new S._PathEdge(),
      new S._PathEdge()
    ];
  },
  isFlipped : false,
  flip      : function() {
    this.isFlipped  = !this.isFlipped;
    var temp        = this.sides[0];
    this.sides[0]   = this.sides[2];
    this.sides[2]   = temp;

    var temp        = this.sides[1];
    this.sides[1]   = this.sides[3];
    this.sides[3]   = temp;
  },
  connect   : function(side, sides) {
    for(s in sides) {
      this.sides[side].links[sides[s]] = this.sides[s];
    }
  }
});

S._PathEdge = Class.extend({
  init    : function(hasPath, links) {
    this.hasPath = hasPath || false;
    this.links  = links || {};
  },
  hasPath  : false,
  links    : {}
});

// 4 pieces
S.HorizontalPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[1].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(1, [3]);
    this.connect(3, [1]);
  }
});

// 3 pieces
S.VerticalPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[2].hasPath   = true;

    this.connect(0, [2]);
    this.connect(2, [0]);
  }
});

// 5 pieces
S.FullCrossPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(0, [1,2,3]);
    this.connect(1, [0,2,3]);
    this.connect(2, [0,1,3]);
    this.connect(3, [0,1,2]);
  }
});

// 5 pieces
S.HorizontalCrossPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(0, [1,3]);
    this.connect(1, [0,3]);
    this.connect(3, [0,1]);
  }
});

// 5 pieces
S.VerticalCrossPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;

    this.connect(0, [1,2]);
    this.connect(1, [0,2]);
    this.connect(2, [0,1]);
  }
});

// 4 pieces
S.CurvedRightPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;

    this.connect(0, [1]);
    this.connect(1, [0]);
  }
});

// 5 pieces
S.CurvedLeftPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(0, [3]);
    this.connect(3, [0]);
  }
});

// 2 pieces
S.DoubleCurvePathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(0, [1]);
    this.connect(1, [0]);
    this.connect(2, [3]);
    this.connect(3, [2]);
  }
});

// 2 pieces
S.BridgePathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(0, [2]);
    this.connect(1, [3]);
    this.connect(2, [0]);
    this.connect(3, [1]);
  }
});

// PURE BLOCK CARDS
S.BlockFullCrossPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;
    this.sides[3].hasPath   = true;
  }
});

S.BlockVerticalCrossPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;
  }
});

S.BlockHorizontalCrossPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[3].hasPath   = true;
  }
});

S.BlockVerticalPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[2].hasPath   = true;
  }
});

S.BlockHorizontalPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[1].hasPath   = true;
    this.sides[3].hasPath   = true;
  }
});

S.BlockTopPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
  }
});

S.BlockRightPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[1].hasPath   = true;
  }
});

S.BlockTopRightPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
  }
});

S.BlockTopLeftPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[3].hasPath   = true;
  }
});
