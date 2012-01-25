// LADDERS
S.LadderCard = S.PathCard.extend({
  // only to know it has a ladder...could also add a field :)
  hasLadder : true
});

S.RightLadderPath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.right].hasPath   = true;
    this.sides[D.right].hasLadder = true;
  }
});

S.TopLadderPath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.top].hasLadder = true;
  }
});

S.CurvedRightLadderPathPath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.top].hasLadder = true;

    this.sides[D.right].hasPath   = true;
    this.sides[D.right].hasLadder = true;

    this.connect( D.top, [D.right] );
    this.connect( D.right, [D.top] );
  }
});

S.CurvedLeftLadderPath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.top].hasLadder = true;

    this.sides[D.left].hasPath   = true;
    this.sides[D.left].hasLadder = true;

    this.connect( D.top, [D.left] );
    this.connect( D.left, [D.top] );
  }
});


