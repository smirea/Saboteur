
/**
 * NOTE: Must extend the extended client-ready Hand!!!
 * This is just like a normal hand class, only that it server dummy cards intead
 */
var HiddenHand = ClientHand.extend({
  _className : 'HiddenHand',
  init : function( ids ){
    this._super( ids );
    U.extend( this, {
      cards : []
    });
  },
  add : function( ids ){
    for( var i in ids ){
      var card = new S.GameCard();
      this.cards.push( card );
      this.structure.cards.append( card.toElement() );
    };
    return this;
  },
  remove : function( ids ){
    for( var i in ids ){
      var card = this.cards.pop();
      card.detach();
    };
    return this;
  }
}); 
