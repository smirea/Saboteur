S.GoalCard = S.PathCard.extend({
  _className  : 'GoalCard',
  init: function(){
    this._super();
    this.tapped = false;
  }
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