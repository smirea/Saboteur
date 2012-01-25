// LADDERS
S.LadderCard = S.PathCard.extend({
  // only to know it has a ladder...could also add a field :)
  hasLadder : true
});

S.RightLadderPath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[1].hasPath   = true;
    this.sides[1].hasLadder = true;
  }
});

S.TopLadderPath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[0].hasLadder = true;
  }
});

S.CurvedRightLadderPathPath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[0].hasLadder = true;

    this.sides[1].hasPath   = true;
    this.sides[1].hasLadder = true;

    this.connect( 0, [1] );
    this.connect( 1, [0] );
  }
});

S.CurvedLeftLadderPath = S.PathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[0].hasLadder = true;

    this.sides[3].hasPath   = true;
    this.sides[3].hasLadder = true;

    this.connect( 0, [3] );
    this.connect( 3, [0] );
  }
});


