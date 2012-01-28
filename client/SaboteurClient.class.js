
var SaboteurClient = Saboteur.extend({
  init    : (function(){
    return function( target, options, cards, classes ){
      if( !target || target.length == 0 ){
        logger.warn( '[SaboteurClient.init] Invalid target', arguments );
        return null;
      };
      
      this._super( options, cards );
      var self = this;
      var mapOptions = {
        maxCards    : this.factory.size(),
        startCards  : this.opt.startCards.map(function(v,i){ v.unshift(self.factory.get('start',i)); return v; }),
        goalCards   : this.opt.goalCards.map(function(v,i){ v.unshift(self.factory.get('dummyGoal',i)); return v; }),
        factory     : this.factory
      };
      U.extend( this, {
        target  : target,
        map     : new S.MapClient( mapOptions )
      });
      U.extend( true, this.cls, SO.classes, classes );
      
      preload_images.apply( this );
      create_structure.apply( this );
    };
    
    function create_structure(){
      this.structure = {
        wrapper : $(document.createElement('div')),
        map     : this.map.toElement(),
        players : $(),
        hand    : $(document.createElement('div'))
      };
      this.structure.wrapper
        .addClass( SO.classes.main )
        .append( this.structure.map, this.structure.players, this.structure.hand );
      this.target.html( this.structure.wrapper );
    }
    
    function preload_images(){
      var all_cards = {};
      U.extend( all_cards, this.gameDeckList, this.roleDeckList );
      var images = [];
      for( var i in all_cards ){
        var tmp = new S[i];
        if( tmp.front_cover ) images.push( tmp.front_cover );
        if( tmp.back_cover ) images.push( tmp.front_cover );
        delete tmp;
      }
      
      var s = $('#progressBar').progressBar({
        title : 'loading...',
        max   : images.length
      });
      P.multiLoad(images, function( image ){
        s.progressBar('increment');
        if( this._total == this._finished ){
          s.progressBar('setMessage', ['---- Image loading done ----']);
          s.progressBar('setTitle', ['now what?!']);
        } else {
          s.progressBar('setMessage', [image.src]);
        }
      });
    };
    
  })()
});
