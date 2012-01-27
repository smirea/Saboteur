// GATES
S.GateCard = S.PathCard.extend({
  _className : 'GateCard',
  // the exact gate will be on the connections
  hasGate : true
});

S.HorizontalBlueGatePath = S.PathCard.extend({
  _className : 'HorizontalBlueGatePath',
  init  : function() {
    this._super();

    this.nodes( D.right, D.left );

    this.connect(D.right, [D.left]);
    this.connect(D.left, [D.right]);
  }
});

S.VerticalBlueGatePath = S.PathCard.extend({
  _className : 'VerticalBlueGatePath',
  init  : function() {
    this._super();

    this.nodes( D.top, D.bottom );

    this.connect(D.top, [D.bottom]);
    this.connect(D.bottom, [D.top]);
  }
});

S.LeftCurvedBlueGatePath = S.PathCard.extend({
  _className : 'LeftCurvedBlueGatePath',
  init  : function() {
    this._super();

    this.nodes( D.top, D.left );

    this.connect(D.top, [D.left]);
    this.connect(D.left, [D.top]);
  }
});

S.BlockHorizontalGreenGatePath = S.PathCard.extend({
  _className : 'BlockHorizontalGreenGatePath',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.left );

    this.connect(D.right, [D.left]);
    this.connect(D.left, [D.right]);
  }
});

S.VerticalGreenGatePath = S.PathCard.extend({
  _className : 'VerticalGreenGatePath',
  init  : function() {
    this._super();

    this.nodes( D.top, D.bottom );

    this.connect(D.top, [D.bottom]);
    this.connect(D.bottom, [D.top]);
  }
});

S.RightCurvedGreenGatePath = S.PathCard.extend({
  _className : 'RightCurvedGreenGatePath',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right );

    this.connect(D.top, [D.right]);
    this.connect(D.right, [D.top]);
  }
});