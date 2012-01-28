
S.StartCard = S.LadderPathCard.extend({
  _className  : 'StartCard',
  init        : function(){ this._super(); }
});
S.FullCrossStartCard = S.StartCard.extend({
  _className : 'FullCrossStartCard',
  init  : function() {
    this._super();
    this.nodes( D.top, D.right, D.bottom, D.left );

    this.connect(D.top, [D.right,D.bottom,D.left]);
    this.connect(D.right, [D.top,D.bottom,D.left]);
    this.connect(D.bottom, [D.top,D.right,D.left]);
    this.connect(D.left, [D.top,D.right,D.bottom]);
  }
}); 