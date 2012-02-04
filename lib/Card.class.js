S.Card = Class.extend({
  _className : 'Card',
  init       : function() {
    
  }
});

S.DummyCard = S.Card.extend({
  _className  : 'DummyCard',
  init        : function() {
    this._super();  
  }
});

S.GameCard = S.Card.extend({
  _className : 'GameCard',
  init       : function() {
    this._super();
  },
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
    return false;
  }
});

S.MapCard = S.GameCard.extend({
  _className  : 'MapCard',
  execute     : function(dryrun, map, posx, posy) {
    return false;
  }
});


