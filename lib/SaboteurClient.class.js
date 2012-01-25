
var SaboteurClient = Saboteur.extend({
  init : function( options, cards, classes ){
    this._super( options, cards );
    Utils.extend( true, this.com.cls, SaboteurOptions.classes, classes );
    console.log( this );
  }
});