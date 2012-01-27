S.GoalCard = S.PathCard.extend({
  _className  : 'GoalCard',
  // only to know it has a crystal...could also add a field :)
  hasCrystal : true
});

S.CurvedLeftGoalCard = S.GoalCard.extend({
  _className : 'CurvedLeftGoalCard',
  init  : function() {
    this._super();
    this.nodes( D.top, D.left );
  }
});

S.CurvedRightGoalCard = S.GoalCard.extend({
  _className : 'CurvedRightGoalCard',
  init  : function() {
    this._super();
    this.nodes( D.top, D.right );
  }
});