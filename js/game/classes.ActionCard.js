
var ActionCard = Card.extend({
  usedOn  : [ ActionCard ]
});


var BrokenLamp    = ActionCard.extend({
  usedOn  : [ Player ]
});
var BrokenCart    = ActionCard.extend({
  usedOn  : [ Player ]
});
var BrokenPickaxe = ActionCard.extend({
  usedOn  : [ Player ]
});


var Lamp          = ActionCard.extend({
  usedOn  : [ BrokenLamp ]
});
var Cart          = ActionCard.extend({
  usedOn  : [ BrokenCart ]
});
var Pickaxe       = ActionCard.extend({
  usedOn  : [ BrokenPickaxe ]
});
var LampPickaxe   = ActionCard.extend({
  usedOn  : [ BrokenLamp, BrokenPickaxe ]
});
var PickaxeCart   = ActionCard.extend({
  usedOn  : [ BrokenPickaxe, BrokenCart ]
});
var CartLamp      = ActionCard.extend({
  usedOn  : [ BrokenCart, BrokenLamp ]
});


var Rockfall      = ActionCard.extend({
  usedOn  : [ PathCard ]
});
var Map           = ActionCard.extend({
  usedOn  : [ GoalCard ]
});
var Theft         = ActionCard.extend({
  usedOn  : [ Player ]
});
var HandsOff      = ActionCard.extend({
  usedOn  : [ Theft ]
});
var SwapHand      = ActionCard.extend({
  usedOn  : [ Player ]
});
var Inspection    = ActionCard.extend({
  usedOn  : [ Player ]
});
var SwapHats      = ActionCard.extend({
  usedOn  : [ Player ]
});
var Trapped       = ActionCard.extend({
  usedOn  : [ Player ]
});
var FreeAtLast    = ActionCard.extend({
  usedOn  : [ Trapped ]
});