
var SaboteurClient = Saboteur.extend({
  target  : null,
  init    : (function(){
    return function( target, options, cards, classes ){
      if( !target || target.length == 0 ){
        logger.warn( '[SaboteurClient.init] Invalid target', arguments );
        return null;
      }
      this._super( options, cards );
      this.target = target;
      Utils.extend( true, this.com.cls, SaboteurOptions.classes, classes );
      
      preload_images.apply( this );
      create_structure.apply( this );
    };
    
    function create_structure(){
      this.com.structure = {
        wrapper : $(document.createElement('div')),
        map     : (new S.MapClient()).toElement(),
        players : $(),
        hand    : $(document.createElement('div'))
      };
    }
    
    function preload_images(){
      var all_cards = {};
      Utils.extend( all_cards, this.com.gameDeckList, this.com.roleDeckList );
      var images = [];
      for( var i in all_cards ){
        var tmp = new S[i];
        if( tmp.front_cover ) images.push( tmp.front_cover );
        if( tmp.back_cover ) images.push( tmp.front_cover );
        delete tmp;
      }
      
      var s = $('#Saboteur').progressBar({
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
    
    function generate_map(){
      var map = new S.MapClient();
      return map.toElement();
    }
  })()
});