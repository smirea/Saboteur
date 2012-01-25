// GATES
S.GateCard = S.PathCard.extend({
  // the exact gate will be on the connections
  hasGate : true
});

S.HorizontalBlueGatePath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.right].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.right, [D.left]);
    this.connect(D.left, [D.right]);
  }
});

S.VerticalBlueGatePath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;

    this.connect(D.top, [D.bottom]);
    this.connect(D.bottom, [D.top]);
  }
});

S.LeftCurvedBlueGatePath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.top, [D.left]);
    this.connect(D.left, [D.top]);
  }
});

S.BlockHorizontalGreenGatePath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.right, [D.left]);
    this.connect(D.left, [D.right]);
  }
});

S.VerticalGreenGatePath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;

    this.connect(D.top, [D.bottom]);
    this.connect(D.bottom, [D.top]);
  }
});

S.RightCurvedGreenGatePath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;

    this.connect(D.top, [D.right]);
    this.connect(D.right, [D.top]);
  }
});
