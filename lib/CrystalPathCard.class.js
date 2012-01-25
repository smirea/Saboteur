// CRYSTALS
S.CrystalCard = S.PathCard.extend({
  // only to know it has a crystal...could also add a field :)
  hasCrystal : true
});

S.RightCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();
    this.sides[1].hasPath   = true;
  }
});

S.TopCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();
    this.sides[0].hasPath   = true;
  }
});

S.FullCrossCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(0, [1,2,3]);
    this.connect(1, [0,2,3]);
    this.connect(2, [0,1,3]);
    this.connect(3, [0,1,2]);
  }
});

S.HorizontalCrossCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();

    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(1, [2,3]);
    this.connect(2, [1,3]);
    this.connect(3, [1,2]);
  }
});

S.BlockHorizontalCrossCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();
    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(1, [2,3]);
    this.connect(2, [1,3]);
    this.connect(3, [1,2]);
  }
});

S.VerticalCrossCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;

    this.connect(0, [1,2]);
    this.connect(1, [0,2]);
    this.connect(2, [0,1]);
  }
});

S.BlockVerticalCrossCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;
    this.sides[3].hasPath   = true;

    this.connect(0, [1,2]);
    this.connect(1, [0,2]);
    this.connect(2, [0,1]);
  }
});

S.BlockVerticalLineCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();

    this.sides[0].hasPath   = true;
    this.sides[1].hasPath   = true;
    this.sides[2].hasPath   = true;

    this.connect(0, [2]);
    this.connect(2, [0]);
  }
});
