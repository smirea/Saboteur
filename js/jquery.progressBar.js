(function($){
  
  $.progressBar = {
    options : {
      value   : 0,
      max     : 100,
      title   : false,
      message : false
    },
    classes : {
      main    : 'progressBar',
      wrapper : 'progressBar-wrapper',
      bar     : 'progressBar-bar',
      title   : 'progressBar-title',
      message : 'progressBar-message'
    }
  };
  
  $.fn.progressBar = function( options, classes ){
    
    // methods
    if( typeof options == 'string' ){
      var fName = options || "";
      var args  = classes || [];
      return this.each(function(){
        var com = $(this).data('com');
        switch( fName ){
          case 'setValue':
            com.value = Math.max( 0, Math.min( com.max, args[0] ) );
            var newWidth  = Math.ceil( com.value / com.max * 100 );
            com.structure.bar.css('width', newWidth + '%');
            break;
          case 'increment':
            $(this).progressBar('setValue', [com.value+1]);
            break;
          case 'decrement':
            $(this).progressBar('setValue', [com.value-1]);
            break;
          case 'setTitle':
            if( args[0] ) com.structure.title.show().html( args[0] );
              else com.structure.title.hide();
            break;
          case 'setMessage':
            if( args[0] ) com.structure.message.show().html( args[0] );
              else com.structure.message.hide();
            break;
        }
      });
    } else {
      
      var opt = {};
      var cls = {};
      
      $.extend( opt, $.progressBar.options, options );
      $.extend( cls, $.progressBar.classes, classes );
      
      return this.each(function(){
        var com = {
          self      : $(this),
          value     : opt.value,
          max       : opt.max,
          structure : {
            main    : $(document.createElement('span')),
            wrapper : $(document.createElement('div')),
            bar     : $(document.createElement('div')),
            title   : $(document.createElement('div')),
            message : $(document.createElement('div'))
          },
          opt       : opt,
          cls       : cls
        };
        
        com.structure.main
          .addClass( cls.main )
          .append( com.structure.title, com.structure.wrapper, com.structure.message );
        com.structure.wrapper
          .addClass( cls.wrapper )
          .append( com.structure.bar );
        com.structure.bar
          .addClass( cls.bar );
        com.structure.title
          .addClass( cls.title );
        com.structure.message
          .addClass( cls.message );
        
        com.self
          .data('com', com)
          .html( com.structure.main )
          .progressBar( 'setValue', [com.value] )
          .progressBar( 'setTitle', [opt.title] )
          .progressBar( 'setMessage', [opt.message] );
      });
    }
    
  };
  
})(jQuery); 