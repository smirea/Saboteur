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
