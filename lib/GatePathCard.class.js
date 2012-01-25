// GATES
S.GateCard = S.BasePathCard.extend({
  // the exact gate will be on the connections
  hasGate : true
});

S.HorizontalBlueGatePath = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[1].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(1, [3]);
    this.connect(3, [1]);
  }
});

S.VerticalBlueGatePath = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[2].hasPath   = true;

    this.connect(0, [2]);
    this.connect(2, [0]);
  }
});

S.LeftCurvedBlueGatePath = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(0, [3]);
    this.connect(3, [0]);
  }
});

S.BlockHorizontalGreenGatePath = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(1, [3]);
    this.connect(3, [1]);
  }
});

S.VerticalGreenGatePath = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[2].hasPath   = true;

    this.connect(0, [2]);
    this.connect(2, [0]);
  }
});

S.RightCurvedGreenGatePath = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;

    this.connect(0, [1]);
    this.connect(1, [0]);
  }
});
