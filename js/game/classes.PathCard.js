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
  }
});

// CRYSTALS
S.CrystalCard = S.BasePathCard.extend({
  // only to know it has a crystal...could also add a field :)
  hasCrystal : true
});

// LADDERS
S.LadderCard = S.BasePathCard.extend({
  // only to know it has a ladder...could also add a field :)
  hasLadder : true
});

S.RightLadder = S.BasePathCard.extend({
  init  : function() {
    this._super();
    this.sides[1].hasPath   = true;
    this.sides[1].hasLadder = true;
  }
});

S.TopLadder = S.BasePathCard.extend({
  init  : function() {
    this._super();
    this.sides[0].hasPath   = true;
    this.sides[0].hasLadder = true;
  }
});

S.CurvedRightLadder = S.BasePathCard.extend({
  init  : function() {
    this._super();
    this.sides[0].hasPath   = true;
    this.sides[0].hasLadder = true;
    this.sides[1].hasPath   = true;
    this.sides[1].hasLadder = true;
    this.sides[0].links.push(this.sides[1])
    this.sides[1].links.push(this.sides[0])
  }
});

S.CurvedLeftLadder = S.BasePathCard.extend({
  init  : function() {
    this._super();
    this.sides[0].hasPath   = true;
    this.sides[0].hasLadder = true;
    this.sides[3].hasPath   = true;
    this.sides[3].hasLadder = true;
    this.sides[0].links.push(this.sides[3])
    this.sides[3].links.push(this.sides[0])
  }
});

// GATES
S.GateCard = S.BasePathCard.extend({
  // the exact gate will be on the connections
  hasGate : true
});

S.HorizontalBlueGate = S.BasePathCard.extend({
  init  : function() {
    this._super();
    this.sides[0].hasPath   = true;
    this.sides[0].hasLadder = true;
    this.sides[3].hasPath   = true;
    this.sides[3].hasLadder = true;
    this.sides[0].links.push(this.sides[3])
    this.sides[3].links.push(this.sides[0])
  }
});


