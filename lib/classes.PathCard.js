S.PathCard = S.Card.extend({
  usedOn  : [ 'PathCard' ]
});

S.BaseLayoutCard = S.PathCard.extend({
  usedOn  : []
});

S._PathEdge = Class.extend({
  init    : function(hasPath, links) {
    this.hasPath = hasPath || false;
    this.links  = links || [];
  },
  hasPath  : false,
  links   : []
});

S.BasePathCard = S.PathCard.extend({
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
      this.sides[side].links.push(this.sides[s]);
    }
  }
});

// 4 pieces
S.HorizontalPathCard = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[1].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(1, [3]);
    this.connect(3, [1]);
  }
});

// 3 pieces
S.VerticalPathCard = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[2].hasPath   = true;

    this.sides[0].links.push(this.sides[2]);
    this.sides[2].links.push(this.sides[0]);
  }
});

// 5 pieces
S.FullCrossPathCard = S.BasePathCard.extend({
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
S.HorizontalCrossPathCard = S.BasePathCard.extend({
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
S.VerticalCrossPathCard = S.BasePathCard.extend({
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
S.CurvedRightPathCard = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;

    this.connect(0, [1]);
    this.connect(1, [0]);
  }
});

// 5 pieces
S.CurvedLeftPathCard = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(0, [3]);
    this.connect(3, [0]);
  }
});

// 2 pieces
S.DoubleCurvePathCard = S.BasePathCard.extend({
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
S.BridgePathCard = S.BasePathCard.extend({
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
S.BlockFullCrossPathCard = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;
    this.sides[3].hasPath   = true;
  }
});

S.BlockVerticalCrossPathCard = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;
  }
});

S.BlockHorizontalCrossPathCard = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[3].hasPath   = true;
  }
});

S.BlockVerticalPathCard = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[2].hasPath   = true;
  }
});

S.BlockHorizontalPathCard = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[1].hasPath   = true;
    this.sides[3].hasPath   = true;
  }
});

S.BlockTopPathCard = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
  }
});

S.BlockRightPathCard = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[1].hasPath   = true;
  }
});

S.BlockTopRightPathCard = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
  }
});

S.BlockTopLeftPathCard = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[3].hasPath   = true;
  }
});
