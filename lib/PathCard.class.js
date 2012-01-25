
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
    var temp        = this.sides[D.top];
    this.sides[D.top]   = this.sides[D.bottom];
    this.sides[D.bottom]   = temp;

    var temp        = this.sides[D.right];
    this.sides[D.right]   = this.sides[D.left];
    this.sides[D.left]   = temp;
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

    this.sides[D.right].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.right, [D.left]);
    this.connect(D.left, [D.right]);
  }
});

// D.left pieces
S.VerticalPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;

    this.connect(D.top, [D.bottom]);
    this.connect(D.bottom, [D.top]);
  }
});

// 5 pieces
S.FullCrossPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.top, [D.right,D.bottom,D.left]);
    this.connect(D.right, [D.top,D.bottom,D.left]);
    this.connect(D.bottom, [D.top,D.right,D.left]);
    this.connect(D.left, [D.top,D.right,D.bottom]);
  }
});

// 5 pieces
S.HorizontalCrossPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.top, [D.right,D.left]);
    this.connect(D.right, [D.top,D.left]);
    this.connect(D.left, [D.top,D.right]);
  }
});

// 5 pieces
S.VerticalCrossPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;

    this.connect(D.top, [D.right,D.bottom]);
    this.connect(D.right, [D.top,D.bottom]);
    this.connect(D.bottom, [D.top,D.right]);
  }
});

// 4 pieces
S.CurvedRightPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;

    this.connect(D.top, [D.right]);
    this.connect(D.right, [D.top]);
  }
});

// 5 pieces
S.CurvedLeftPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.top, [D.left]);
    this.connect(D.left, [D.top]);
  }
});

// D.bottom pieces
S.DoubleCurvePathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.top, [D.right]);
    this.connect(D.right, [D.top]);
    this.connect(D.bottom, [D.left]);
    this.connect(D.left, [D.bottom]);
  }
});

// D.bottom pieces
S.BridgePathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.top, [D.bottom]);
    this.connect(D.right, [D.left]);
    this.connect(D.bottom, [D.top]);
    this.connect(D.left, [D.right]);
  }
});

// PURE BLOCK CARDS
S.BlockFullCrossPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;
    this.sides[D.left].hasPath   = true;
  }
});

S.BlockVerticalCrossPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;
  }
});

S.BlockHorizontalCrossPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.left].hasPath   = true;
  }
});

S.BlockVerticalPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;
  }
});

S.BlockHorizontalPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.right].hasPath   = true;
    this.sides[D.left].hasPath   = true;
  }
});

S.BlockTopPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
  }
});

S.BlockRightPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.right].hasPath   = true;
  }
});

S.BlockTopRightPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
  }
});

S.BlockTopLeftPathCard = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.left].hasPath   = true;
  }
});
