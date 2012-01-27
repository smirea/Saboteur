
S.GoldCard = S.GoalCard.extend({
  _className : 'GoldCard'
});
S.FullCrossGoldCard = S.GoldCard.extend({
  _className : 'FullCrossGoldCard',
  init  : function() {
    this._super();
    this.nodes( D.top, D.right, D.bottom, D.left );
  }
}); 