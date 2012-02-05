S.MapActionCard = S.MapCard.extend({
  _className  : 'MapActionCard'
});

S.PlayerActionCard = S.GameCard.extend({
  _className  : 'PlayerActionCard',
  multiple    : false, // if one can have multiple cards of this type
  placed      : false // if it can be placed on a Player or if it removes
});

S.PublicPlayerActionCard = S.PlayerActionCard.extend({
  _className  : 'PublicPlayerActionCard',
  target      : 'public',
  placed      : null, // should be true or false
  effect      : [], // attribute from player.public
  execute     : function(dryrun, player, cardID) {
    if (this.placed) { 
      if (this.multiple) { // can get more or have none
        if (!dryrun) {
          player.public[this.effect[0]].push(this);
        };
        return true;
      } else {
        for (var i in this.effect) {
          if (player.public[this.effect[i]]) { // if something is already there...
            return false;
          };
        };
        if (!dryrun) {
          player.public[this.effect[0]].push(this);
        };
        return true;
      };
    } else {
      for (var i in this.effect) {
        var effects = player.public[this.effect[i]];
        for (var j in effects) {
          if (effects[j].id == cardID) {
            if (!dryrun) {
              player[effect].splice(i, 1);
            };
            return true;
          };
        };
      };
      return false;
    };
    return true;
  }
});

S.PrivatePlayerActionCard = S.PlayerActionCard.extend({
  _className  : 'PrivatePlayerActionCard',
  target      : 'private',
  execute     : function(dryrun, player) {
    if (dryrun) {
      return true;
    } else {
      return null;
    };
  }
});

// PUBLIC Player
S.BrokenLamp    = S.PublicPlayerActionCard.extend({
  _className : 'BrokenLamp',
  placed     : true
});

S.BrokenCart    = S.PublicPlayerActionCard.extend({
  _className : 'BrokenCart',
  effect     : ['cart'],
  placed     : true
});

S.BrokenPickaxe = S.PublicPlayerActionCard.extend({
  _className : 'BrokenPickaxe',
  effect     : ['pickaxe'],
  placed     : true
});


S.Lamp          = S.PublicPlayerActionCard.extend({
  _className : 'Lamp',
  effect     : ['lamp'],
  placed     : false
});

S.Cart          = S.PublicPlayerActionCard.extend({
  _className : 'Cart',
  effect     : ['cart'],
  placed     : false
});

S.Pickaxe       = S.PublicPlayerActionCard.extend({
  _className : 'Pickaxe',
  effect     : ['pickaxe'],
  placed     : false
});

S.LampPickaxe   = S.PublicPlayerActionCard.extend({
  _className : 'LampPickaxe',
  effect     : ['lamp', 'pickaxe'],
  placed     : false
});

S.PickaxeCart   = S.PublicPlayerActionCard.extend({
  _className : 'PickaxeCart',
  effect     : ['pickaxe', 'cart'],
  placed     : false
});

S.CartLamp      = S.PublicPlayerActionCard.extend({
  _className : 'CartLamp',
  effect     : ['cart', 'lamp'],
  placed     : false
});

S.Theft         = S.PublicPlayerActionCard.extend({
  _className : 'Theft',
  effect     : ['theft'],
  placed     : true
});

S.HandsOff      = S.PublicPlayerActionCard.extend({
  _className : 'HandsOff',
  effect     : ['theft'],
  placed     : false
});

S.Trapped       = S.PublicPlayerActionCard.extend({
  _className : 'Trapped',
  effect     : ['jail'],
  placed     : true
});

S.FreeAtLast    = S.PublicPlayerActionCard.extend({
  _className : 'FreeAtLast',
  effect     : ['jail'],
  placed     : false
});

// PRIVATE Player
S.SwapHand      = S.PrivatePlayerActionCard.extend({
  _className : 'SwapHand'
});

S.Inspection    = S.PrivatePlayerActionCard.extend({
  _className : 'Inspection'
});

S.SwapHats      = S.PrivatePlayerActionCard.extend({
  _className : 'SwapHats'
});


// MAP
S.Rockfall      = S.MapActionCard.extend({
  _className : 'Rockfall',
  target     : 'PathCard',
  execute    : function(dryrun, map, posx, posy) {
    if (map.checkRemoveCardAt(posx, posy)) {
      if (!dryrun) {
        map.removeCardAt(posx, posy);
      };
      return true;
    } else {
      return false;
    };
    
    logger.warn(this._className, 'Failed doing action');
    return null;
  }
});

S.ViewGoalCard = S.MapActionCard.extend({
  _className : 'ViewGoalCard',
  target     : 'GoalCard',
  execute    : function(dryrun, map, posx, posy) {
    var card = map.getCardAt(posx, posy);
    if (!card || !(card instanceof S[this.target])) {
      return false;
    } else {
      if (dryrun) {
        return true;
      } else {
        return card.id;
      };
    };
    
    logger.warn(this._className, 'Failed doing action');
  }
});
