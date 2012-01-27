
S.StartCard = S.LadderPathCard.extend({
  _className : 'StartCard'
});
S.FullCrossStartCard = S.StartCard.extend({
  _className : 'FullCrossStartCard',
  init  : function() {
    this._super();
    this.nodes( D.top, D.right, D.bottom, D.left );
  }
}); 