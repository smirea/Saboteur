
var ClientSaboteur = Saboteur.extend({
  _className : 'ClientSaboteur',
  init : (function(){
    return function( target, options, cards ){
      if( !target || target.length == 0 ){
        logger.warn( '[SaboteurClient.init] Invalid target', arguments );
        return null;
      };
      
      this._super( options, cards );
      U.extend( this, {
        target    : target,
        map       : null,
        selected  : $()
      });
      
      createStructure.call(this);
      bindLiveEvents.call(this);
    };
    
    function bindLiveEvents(){
      // Select Card
      var self = this;
      $('.'+SO.classes.hand.main+' .'+SO.classes.card)
        .live( 'click.selectCard', function(){
          if( !$(this).hasClass('selected') ){
            if( self.selected.length > 0 ){
              self.selected.trigger('click.selectCard');
              self.selected = $();
            }
            self.selected = self.selected.add( $(this) );
            var card = $(this).data('card');
            card.rotate( card.isFlipped ? 270 : 90 );
            $(this)
              .addClass( 'selected' )
              .trigger( 'mouseenter.toggleInfo' );
          } else {
            $(this).removeClass( 'selected' );
            self.selected = self.selected.not( $(this) );
            $(this).data('card').rotate( 0 );
          };
        });
        
      // Target Map
      $('.'+SO.classes.map.table)
        .live('click.placeCard',function(){
          
        });
    };
    
    function createStructure(){
      this.structure  = {
        wrapper     : $(document.createElement('div')),
        map         : $(document.createElement('div')),
        players     : $(document.createElement('div')),
        hand        : $(document.createElement('div')),
        progressBar : $(document.createElement('div'))
      };
      
      this.structure.wrapper
        .addClass( SO.classes.main )
        .append( this.structure.progressBar, 
                this.structure.map, 
                this.structure.players, 
                this.structure.hand 
        );
        
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
      var factory   = F.getNamespaces('game');
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
      return this;
    };
  })(),

  createHand : function(){
    this.structure.hand
      .append( this.players[gameState.playerID].private.hand.toElement() );
    return this;
  },
  
  createMap : function(){
    var self = this;
    this.map = new ClientMap( this.createMapOptions(false) );
    this.structure.map
      .append( this.map.toElement() )
      .addClass( SO.classes.map.main );
    return this;
  },
  
  preloadImages : function( callback ){
    callback = callback || function(){};
    var images = [];
    U.each( SO.images, function( k, v ){
      images.push( v.front_cover, v.back_cover );
    });
    var s = this.structure.progressBar.progressBar({
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
    return this;
  },
  
  setPlayers : function( players ){
    this.players = {};
    for( var i in players ){
      if( i === gameState.playerID ){
        this.players[ i ] = new ClientPlayer( players[i] );
      } else {
        //TODO: add support for other players
        continue;
        this.players[ i ] = new HiddenPlayer( players[i] );
      };
    };
    return this;
  }
  
});
