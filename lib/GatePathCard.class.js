// GATES
S.GateCard = S.PathCard.extend({
  _className  : 'GateCard',
  // the exact gate will be on the connections
  hasGate     : true
});

S.BlueGateCard = S.GateCard.extend({
  color : 'blue'
});

S.GreenGateCard = S.GateCard.extend({
  color : 'green'
});

S.HorizontalBlueGateCard = S.BlueGateCard.extend({
  _className : 'HorizontalBlueGateCard',
  init  : function() {
    this._super();

    this.nodes( D.right, D.left );

    this.connect(D.right, [D.left]);
    this.connect(D.left, [D.right]);
  }
});

S.VerticalBlueGateCard = S.BlueGateCard.extend({
  _className : 'VerticalBlueGateCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.bottom );

    this.connect(D.top, [D.bottom]);
    this.connect(D.bottom, [D.top]);
  }
});

S.LeftCurvedBlueGatePath = S.BlueGateCard.extend({
  _className : 'LeftCurvedBlueGatePath',
  init  : function() {
    this._super();

    this.nodes( D.top, D.left );

    this.connect(D.top, [D.left]);
    this.connect(D.left, [D.top]);
  }
});

S.BlockHorizontalGreenGateCard = S.GreenGateCard.extend({
  _className : 'BlockHorizontalGreenGateCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right, D.left );

    this.connect(D.right, [D.left]);
    this.connect(D.left, [D.right]);
  }
});

S.VerticalGreenGateCard = S.GreenGateCard.extend({
  _className : 'VerticalGreenGateCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.bottom );

    this.connect(D.top, [D.bottom]);
    this.connect(D.bottom, [D.top]);
  }
});

S.RightCurvedGreenGateCard = S.GreenGateCard.extend({
  _className : 'RightCurvedGreenGateCard',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right );

    this.connect(D.top, [D.right]);
    this.connect(D.right, [D.top]);
  }
});
