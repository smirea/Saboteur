// LADDERS
S.LadderPathCard = S.PathCard.extend({
  _className : 'LadderPathCard',
  // only to know it has a ladder...could also add a field :)
  hasLadder : true
});

S.RightLadderPath = S.LadderPathCard.extend({
  _className : 'RightLadderPath',
  init  : function() {
    this._super();

    this.nodes( D.right );
    this.sides[D.right].hasLadder = true;
  }
});

S.TopLadderPath = S.LadderPathCard.extend({
  _className : 'TopLadderPath',
  init  : function() {
    this._super();

    this.nodes( D.top );
    this.sides[D.top].hasLadder = true;
  }
});

S.CurvedRightLadderPath = S.LadderPathCard.extend({
  _className : 'CurvedRightLadderPath',
  init  : function() {
    this._super();

    this.nodes( D.top, D.right );
    
    this.sides[D.top].hasLadder = true;
    this.sides[D.right].hasLadder = true;

    this.connect( D.top, [D.right] );
    this.connect( D.right, [D.top] );
  }
});

S.CurvedLeftLadderPath = S.LadderPathCard.extend({
  _className : 'CurvedLeftLadderPath',
  init  : function() {
    this._super();

    this.nodes( D.top, D.left );
    
    this.sides[D.top].hasLadder = true;
    this.sides[D.left].hasLadder = true;

    this.connect( D.top, [D.left] );
    this.connect( D.left, [D.top] );
  }
});