
var SaboteurClient = Saboteur.extend({
  init    : (function(){
    return function( target, options, cards ){
      if( !target || target.length == 0 ){
        logger.warn( '[SaboteurClient.init] Invalid target', arguments );
        return null;
      };
      
      this._super( options, cards );
      this.target = target;
      
      var self = this;
      preload_images.call( self, function(){ create_structure.apply( self ); } );
    };
    
    function create_structure(){
      var self = this;
      var mapOptions = {
        maxCards    : this.factory.size(),
        startCards  : this.opt.startCards.map(function(v,i){ v.unshift(self.factory.get('start',i)); return v; }),
        goalCards   : this.opt.goalCards.map(function(v,i){ v.unshift(self.factory.get('dummyGoal',i)); return v; }),
        factory     : this.factory
      };
      
      this.map        = new S.MapClient( mapOptions );
      this.structure  = {
        wrapper : $(document.createElement('div')),
        map     : this.map.toElement(),
        players : $(),
        hand    : $(document.createElement('div'))
      };
      this.structure.map
        .addClass( SO.classes.map.main );
      this.structure.hand
        .addClass( SO.classes.hand );
      this.structure.wrapper
        .addClass( SO.classes.main )
        .append( this.structure.map, this.structure.players, this.structure.hand );
      this.target.html( this.structure.wrapper );
      
      /*// JUST FOR TESTING
      var test = $(document.createElement('div'));
      test.css({
        'position'    : 'absolute',
        'top'         : 0,
        'right'       : 0,
        'width'       : 600,
        'background'  : 'red'
      });
      var factory   = this.factory.getNamespaces('game');
      var bitmask   = {};
      var selected  = $();
      for( var i in factory ){
        if( S[factory[i]._className] && !bitmask[factory[i]._className]){
          var card = new S[factory[i]._className];
          card.name = card._className.replace(/([A-Z])/g, " $1");
          test.append( card.toElement() );
          card
            .toElement()
            .data('object', card)
            .bind('click', function(){
            if( !$(this).hasClass('selected') ){
              $(this).addClass('selected');
              selected.removeClass('selected');
              selected = $(this);
              $(this).data('object').rotate( 270 );
            } else {
              $(this).removeClass('selected');
              selected = $();
              $(this).data('object').rotate( 0 );
            };
          });
          bitmask[factory[i]._className] = true;
        };
      };
      var self = this;
      self.structure.map
        .find('.'+SO.classes.card)
        .each(function(){
          $(this).bind('click', function(){
            if( selected ){
              var obj = selected.data('card');
              var id  = $(this).parent().attr('id').split('_');
              var x   = parseInt( id[1] );
              var y   = parseInt( id[2] );
              if( self.map.checkInsertCardAt( obj, x, y ) ){
                self.map.insertCardAt( obj, x, y );
              } else {
                logger.info(' [] You can\'t insert a card at that position', obj, x, y, arguments );
              }
            } else {
              logger.info( '[] You must select a card first', arguments );
            }
          });
        });
      this.structure.wrapper.append( test );
      // END TESTING
      */
    };
    
    function preload_images( callback ){
      var images = [];
      U.each( SO.images, function( k, v ){
        images.push( v.front_cover, v.back_cover );
      });
      var s = $('#progressBar').progressBar({
        title : 'loading...',
        max   : images.length
      });
      var self = this;
      P.multiLoad(images, function( image ){
        s.progressBar('increment');
        if( this._total == this._finished ){
          s.progressBar('setMessage', ['---- Image loading done ----']);
          s.progressBar('setTitle', ['now what?!']);
          callback.call( self );
        } else {
          s.progressBar('setMessage', [image.src]);
        }
      });
    };
    
  })()
});
