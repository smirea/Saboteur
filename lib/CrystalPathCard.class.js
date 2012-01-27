// CRYSTALS
S.CrystalCard = S.PathCard.extend({
  // only to know it has a crystal...could also add a field :)
  hasCrystal : true
});

S.RightCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();
    this.sides[D.right].hasPath   = true;
  }
});

S.TopCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();
    this.sides[D.top].hasPath   = true;
  }
});

S.FullCrossCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.top, [D.right,D.bottom,D.left]);
    this.connect(D.right, [D.top,D.bottom,D.left]);
    this.connect(D.bottom, [D.top,D.right,D.left]);
    this.connect(D.left, [D.top,D.right,D.bottom]);
  }
});

S.HorizontalCrossCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();

    this.sides[D.right].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.right, [D.bottom,D.left]);
    this.connect(D.bottom, [D.right,D.left]);
    this.connect(D.left, [D.right,D.bottom]);
  }
});

S.BlockHorizontalCrossCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();
    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.right, [D.bottom,D.left]);
    this.connect(D.bottom, [D.right,D.left]);
    this.connect(D.left, [D.right,D.bottom]);
  }
});

S.VerticalCrossCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;

    this.connect(D.top, [D.right,D.bottom]);
    this.connect(D.right, [D.top,D.bottom]);
    this.connect(D.bottom, [D.top,D.right]);
  }
});

S.BlockVerticalCrossCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;
    this.sides[D.left].hasPath   = true;

    this.connect(D.top, [D.right,D.bottom]);
    this.connect(D.right, [D.top,D.bottom]);
    this.connect(D.bottom, [D.top,D.right]);
  }
});

S.BlockVerticalLineCrystalCard = S.CrystalCard.extend({
  init  : function() {
    this._super();

    this.sides[D.top].hasPath   = true;
    this.sides[D.right].hasPath   = true;
    this.sides[D.bottom].hasPath   = true;

    this.connect(D.top, [D.bottom]);
    this.connect(D.bottom, [D.top]);
  }
});