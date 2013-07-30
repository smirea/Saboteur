HiddenPlayer = ClientPlayer.extend({
  init : function( attributes, handClass ){
    handClass = handClass || HiddenHand;
    this._super( attributes, handClass );
  }
});
