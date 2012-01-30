(function($){
  
  $.mouseToken = function( options, classes ){
    
    var opt = {
      object  : '<div style="background:red;width:10px;height:10px;"></div>',
      offsetX : 20,
      offsetY : 30
    };
    
    var cls = {
      token : 'mouseToken-token'
    };
    
    // delete if already set
    if( $(window).data('mouseToken') ){
      $(window).data('mouseToken').token.remove();
      $(window).unbind('mousemove.mouseToken');
    }
    
    if( options !== false ){
      $.extend( opt, options );
      $.extend( cls, classes );
      var com = {
        token : $(document.createElement('div')),
        opt   : opt,
        cls   : cls
      };
      com.token
        .addClass( cls.token )
        .append( opt.object )
        .css({
          position  : 'absolute',
          zIndex    : 2000000000
        });
      $(document).children().eq(0).append( com.token );
      
      $(window)
        .data('mouseToken', com)
        .bind('mousemove.mouseToken', function(e){
          com.token.offset({
            left  : e.pageX + opt.offsetX,
            top   : e.pageY + opt.offsetY
          });
        });
    }
    
  };
  
})(jQuery); 
