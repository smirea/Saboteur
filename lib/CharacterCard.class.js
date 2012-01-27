
S.RoleCard = S.Card.extend({
  _className : 'RoleCard',
  usedOn  : [ 'Player' ]
});

S.GoldDigger_blue   = S.RoleCard.extend({
  _className : 'GoldDigger_blue',
});
S.GoldDigger_green  = S.RoleCard.extend({
  _className : 'GoldDigger_green',
});
S.Boss              = S.RoleCard.extend({
  _className : 'Boss',
});
S.Geologist         = S.RoleCard.extend({
  _className : 'Geologist',
});
S.Profiteer         = S.RoleCard.extend({
  _className : 'Profiteer',
});
S.Saboteur          = S.RoleCard.extend({
  _className : 'Saboteur',
});
