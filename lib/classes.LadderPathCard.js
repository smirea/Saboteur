// LADDERS
S.LadderCard = S.BasePathCard.extend({
  // only to know it has a ladder...could also add a field :)
  hasLadder : true
});

S.RightLadderPath = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[1].hasPath   = true;
    this.sides[1].hasLadder = true;
  }
});

S.TopLadderPath = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[0].hasLadder = true;
  }
});

S.CurvedRightLadderPathPath = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[0].hasLadder = true;

    this.sides[1].hasPath   = true;
    this.sides[1].hasLadder = true;

    this.sides[0].links.push(this.sides[1]);
    this.sides[1].links.push(this.sides[0]);
  }
});

S.CurvedLeftLadderPath = S.BasePathCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[0].hasLadder = true;

    this.sides[3].hasPath   = true;
    this.sides[3].hasLadder = true;

    this.sides[0].links.push(this.sides[3]);
    this.sides[3].links.push(this.sides[0]);
  }
});


