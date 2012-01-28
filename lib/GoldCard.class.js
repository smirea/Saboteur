
S.GoldCard = S.GoalCard.extend({
  _className : 'GoldCard'
});
S.FullCrossGoldCard = S.GoldCard.extend({
  _className : 'FullCrossGoldCard',
  init  : function() {
    this._super();
    this.nodes( D.top, D.right, D.bottom, D.left );
    
    this.connect(D.top, [D.right,D.bottom,D.left]);
    this.connect(D.right, [D.top,D.bottom,D.left]);
    this.connect(D.bottom, [D.top,D.right,D.left]);
    this.connect(D.left, [D.top,D.right,D.bottom]);
  }
}); 