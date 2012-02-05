ClientPlayer = Player.extend({
  init : function( attributes, handClass ){
    handClass = handClass || ClientHand;
    this._super( attributes, handClass );
  }
});