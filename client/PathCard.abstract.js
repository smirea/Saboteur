S.PathCard = S.PathCard.extend({
  _className  : 'PathCard',
  toElement   : function(){
    if( !this.structure ){
      this._super();
      this.structure.rotate = $(document.createElement('a'));
      var self = this;
      this.structure.rotate
        .attr({
          'class' : 'card-rotate',
          'href'  : 'javascript:void(0)',
          'title' : 'Flip Card'
        }).html(
          $(document.createElement('img'))
            .attr('src',SO.webRoot+'/images/icon-rotate.png')
        ).bind('click.rotate', function(e){
          e.stopPropagation();
          self.flip();
        });
      this.structure.overlay.append( this.structure.rotate );
    };
    return this.structure.main;
  },
  flip : function(){
    this._super();
    this.rotate( this.isFlipped ? 90 : 270 );
  }
}); 
