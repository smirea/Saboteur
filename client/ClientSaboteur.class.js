
var ClientSaboteur = Saboteur.extend({
  _className : 'ClientSaboteur',
  init : (function(){
    return function( target, options, cards ){
      if( !target || target.length == 0 ){
        logger.warn( '[SaboteurClient.init] Invalid target', arguments );
        return null;
      };
      
      this._super( options, cards );
      
      $.extend($.expr[':'], {
        selected : function(el){
          return !!$(el).hasClass('selected');
        }
      });
      
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
    this.map = new ClientMap( this.factory, this.createMapOptions(false) );
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
