S.ActionCard = S.Card.extend({
  _className : 'ActionCard',
  target     : '', // _className for maps, public/private for person
  /**
   * Checks whether the cards function can be executed
   * @return true if success, false otherwise
   */
  check      : function() {
    
  },
  /**
   * Tries to execute the given action on the target, potentially with 
   * extra arguments.
   * @param dryrun true if you want to just check if possible, false to execute
   * @return true if success, false otherwise, null if more work is to be done
   */
  execute : function(dryrun) {
    // execute on Map or on player
  }
});

S.MapActionCard = S.ActionCard.extend({
  _className  : 'MapActionCard',
  execute     : function(dryrun, map, posx, posy) {
    return true;
  }
});

S.PersonActionCard = S.ActionCard.extend({
  _className  : 'PersonActionCard',
  multiple    : false, // if one can have multiple cards of thos type
  placed      : false // if it can be placed on a person or if it removes
});

S.PublicPersonActionCard = S.PersonActionCard.extend({
  _className  : 'PublicPersonActionCard',
  placed      : null, // should be true or false
  effect      : '', // attribute from player.public
  execute     : function(dryrun, player, cardID) {
    var effect = card.public;
    if (this.placed) { 
      if (this.multiple || player[effect]) { // can get more or have none
        if (!dryrun) {
          player[effect].push(this);
        };
        return true;
      } else {
        return false;
      };
    } else {
      if (player[effect] && cardID) { // if we have cards there and we have a target
        for (var i in player[effect]) {
          if (player[effect][i].id == cardID) {
            if (!dryrun) {
              player[effect].splice(i, 1);
            };
            return true;
          };
        }
        // if we couldn't find it...
        return false;
      } else {
        return false;
      };
    };
    return true;
  }
});

S.PrivatePersonActionCard = S.PersonActionCard.extend({
  _className  : 'PrivatePersonActionCard',
  execute     : function(dryrun, player) {
    return null;
  }
});

// PUBLIC PERSON
S.BrokenLamp    = S.PublicPersonActionCard.extend({
  _className : 'BrokenLamp',
  placed     : false
});

S.BrokenCart    = S.PublicPersonActionCard.extend({
  _className : 'BrokenCart',
  placed     : false
});

S.BrokenPickaxe = S.PublicPersonActionCard.extend({
  _className : 'BrokenPickaxe',
  placed     : false
});


S.Lamp          = S.PublicPersonActionCard.extend({
  _className : 'Lamp',
  placed     : true
});

S.Cart          = S.PublicPersonActionCard.extend({
  _className : 'Cart',
  placed     : true
});

S.Pickaxe       = S.PublicPersonActionCard.extend({
  _className : 'Pickaxe',
  placed     : true
});

S.LampPickaxe   = S.PublicPersonActionCard.extend({
  _className : 'LampPickaxe',
  placed     : true
});

S.PickaxeCart   = S.PublicPersonActionCard.extend({
  _className : 'PickaxeCart',
  placed     : true
});

S.CartLamp      = S.PublicPersonActionCard.extend({
  _className : 'CartLamp',
  placed     : true
});

S.Theft         = S.PublicPersonActionCard.extend({
  _className : 'Theft',
  placed     : true
});

S.HandsOff      = S.PublicPersonActionCard.extend({
  _className : 'HandsOff',
  placed     : false
});

S.Trapped       = S.PublicPersonActionCard.extend({
  _className : 'Trapped',
  placed     : false
});

S.FreeAtLast    = S.PublicPersonActionCard.extend({
  _className : 'FreeAtLast',
  placed     : true
});

// PRIVATE PERSON
S.SwapHand      = S.PrivatePersonActionCard.extend({
  _className : 'SwapHand'
});

S.Inspection    = S.PrivatePersonActionCard.extend({
  _className : 'Inspection'
});

S.SwapHats      = S.PrivatePersonActionCard.extend({
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
    return true;
  }
});

S.ViewGoalCard = S.MapActionCard.extend({
  _className : 'ViewGoalCard',
  target     : 'GoalCard',
  execute    : function(dryrun, map, posx, posy) {
    var card = map.getCardAt(posx, posy);
    if (dryrun) {
      return card instanceof S[this.target];
    } else {
      return card;
    };
  }
});
