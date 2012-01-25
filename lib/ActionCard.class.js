
S.ActionCard = S.Card.extend({
  usedOn  : [  'ActionCard' ],
  check   : function() {
    return true;
  },
  execute : function(target, extraarg) {
    // execute on Map or on targetplayer
  }
});


S.BrokenLamp    = S.ActionCard.extend({
  usedOn  : [ 'targetplayer' ],
  check   : function(targetplayer) {
    return targetplayer.lamp;
  },
  execute : function(targetplayer) {
    targetplayer.lamp = false;
  }
});
S.BrokenCart    = S.ActionCard.extend({
  usedOn  : [ 'targetplayer' ],
  check   : function(targetplayer) {
    return targetplayer.cart;
  },
  execute : function(targetplayer) {
    targetplayer.cart = false;
  }
});
S.BrokenPickaxe = S.ActionCard.extend({
  usedOn  : [ 'targetplayer' ],
  check   : function(targetplayer) {
    return targetplayer.pickaxe;
  },
  execute : function(targetplayer) {
    targetplayer.pickaxe = false;
  }
});


S.Lamp          = S.ActionCard.extend({
  usedOn  : [ 'BrokenLamp' ],
  check   : function(targetplayer) {
    return !targetplayer.lamp;
  },
  execute : function(targetplayer) {
    targetplayer.lamp = true;
  }
});
S.Cart          = S.ActionCard.extend({
  usedOn  : [ 'BrokenCart' ],
  check   : function(targetplayer) {
    return !targetplayer.cart;
  },
  execute : function(targetplayer) {
    targetplayer.cart = true;
  }
});
S.Pickaxe       = S.ActionCard.extend({
  usedOn  : [ 'BrokenPickaxe' ],
  check   : function(targetplayer) {
    return !targetplayer.pickaxe;
  },
  execute : function() {
    targetplayer.pickaxe = true;
  }
});
S.LampPickaxe   = S.ActionCard.extend({
  usedOn  : [ 'BrokenLamp', 'BrokenPickaxe' ],
  check   : function(targetplayer, first) {
    return first ? !targetplayer.lamp : !targetplayer.pickaxe;
  },
  execute : function(targetplayer, first) {
    ( first ? targetplayer.lamp = true : targetplayer.pickaxe = true);
  }
});
S.PickaxeCart   = S.ActionCard.extend({
  usedOn  : [ 'BrokenPickaxe', 'BrokenCart' ],
  check   : function(targetplayer, first) {
    return first ? !targetplayer.pickaxe : !targetplayer.cart;
  },
  execute : function(targetplayer, first) {
    ( first ? targetplayer.pickaxe = true : targetplayer.cart = true);
  }
});
S.CartLamp      = S.ActionCard.extend({
  usedOn  : [ 'BrokenCart', 'BrokenLamp' ],
  check   : function(targetplayer, first) {
    return first ? !targetplayer.cart : !targetplayer.lamp;
  },
  execute : function(targetplayer, first) {
    ( first ? targetplayer.cart = true : targetplayer.lamp = true);
  }
});


S.Rockfall      = S.ActionCard.extend({
  usedOn  : [ 'PathCard' ],
  check   : function(map, pos) {
    var card = map.cardAt(pos) || {};
    return card.destructible;
  },
  execute : function(map, pos) {
    map.removeCard(pos);
  }
});
S.Map           = S.ActionCard.extend({
  usedOn  : [ 'GoalCard' ],
  check   : function(map, pos) {
    var card = map.cardAt(pos) || {};
    return card.isGoal;
  },
  execute : function(map, pos) {
    // TODO: ...returning?
    return map.cardAt(pos).hasGold;
  }
});
S.Theft         = S.ActionCard.extend({
  usedOn  : [ 'targetplayer' ],
  check   : function(targetplayer) {
    return true;
  },
  execute : function(targetplayer) {
    ++targetplayer.theft;
  }
});
S.HandsOff      = S.ActionCard.extend({
  usedOn  : [ 'Theft' ],
  check   : function(targetplayer) {
    return targetplayer.theft > 0;
  },
  execute : function(targetplayer) {
    --targetplayer.theft;
  }
});
S.SwapHand      = S.ActionCard.extend({
  usedOn  : [ 'targetplayer' ],
  check   : function(targetplayer) {
    return true;
  },
  execute : function(targetplayer, player) {
    // TODO: need to take away the card before this happens
    var cards = targetplayer.cards;
    targetplayer.cards = player.cards;
    player.cards = cards;
  }
});
S.Inspection    = S.ActionCard.extend({
  usedOn  : [ 'targetplayer' ],
  check   : function(targetplayer) {
    return true;
  },
  execute : function(targetplayer) {
    return targetplayer.roleCard;
  }
});
S.SwapHats      = S.ActionCard.extend({
  usedOn  : [ 'targetplayer' ],
  check   : function(targetplayer) {
    return true;
  },
  execute : function(targetplayer) {
    //TODO: remains to be seen...this needs to go back to the user!
  }
});
S.Trapped       = S.ActionCard.extend({
  usedOn  : [ 'targetplayer' ],
  check   : function(targetplayer) {
    return targetplayer.jail;
  },
  execute : function(targetplayer) {
    player.jail = true;
  }
});
S.FreeAtLast    = S.ActionCard.extend({
  usedOn  : [ 'Trapped' ],
  check   : function(targetplayer) {
    return !targetplayer.jail;
  },
  execute : function(targetplayer) {
    player.jail = false;
  }
});
