
S.ActionCard = S.Card.extend({
  usedOn  : [  'ActionCard' ]
});


S.BrokenLamp    = S.ActionCard.extend({
  usedOn  : [ 'Player' ]
});
S.BrokenCart    = S.ActionCard.extend({
  usedOn  : [ 'Player' ]
});
S.BrokenPickaxe = S.ActionCard.extend({
  usedOn  : [ 'Player' ]
});


S.Lamp          = S.ActionCard.extend({
  usedOn  : [ 'BrokenLamp' ]
});
S.Cart          = S.ActionCard.extend({
  usedOn  : [ 'BrokenCart' ]
});
S.Pickaxe       = S.ActionCard.extend({
  usedOn  : [ 'BrokenPickaxe' ]
});
S.LampPickaxe   = S.ActionCard.extend({
  usedOn  : [ 'BrokenLamp', 'BrokenPickaxe' ]
});
S.PickaxeCart   = S.ActionCard.extend({
  usedOn  : [ 'BrokenPickaxe', 'BrokenCart' ]
});
S.CartLamp      = S.ActionCard.extend({
  usedOn  : [ 'BrokenCart', 'BrokenLamp' ]
});


S.Rockfall      = S.ActionCard.extend({
  usedOn  : [ 'PathCard' ]
});
S.Map           = S.ActionCard.extend({
  usedOn  : [ 'GoalCard' ]
});
S.Theft         = S.ActionCard.extend({
  usedOn  : [ 'Player' ]
});
S.HandsOff      = S.ActionCard.extend({
  usedOn  : [ 'Theft' ]
});
S.SwapHand      = S.ActionCard.extend({
  usedOn  : [ 'Player' ]
});
S.Inspection    = S.ActionCard.extend({
  usedOn  : [ 'Player' ]
});
S.SwapHats      = S.ActionCard.extend({
  usedOn  : [ 'Player' ]
});
S.Trapped       = S.ActionCard.extend({
  usedOn  : [ 'Player' ]
});
S.FreeAtLast    = S.ActionCard.extend({
  usedOn  : [ 'Trapped' ]
});
