var ClientUtils = CU = {
  CardHolder  : Class.extend({
    init : function( id ){
      this.element = $(document.createElement('a'));
      this.element.attr({
        'id'    : id || null,
        'class' : SO.classes.cardHolder,
        'href'  : 'javascript:void(0)'
      });
    },
    toElement : function(){
      return this.element;
    }
  })
}; 
