S.Card = S.Card.extend({
  init : function(){
    U.extend( this, {
      name          : 'Card-Name',
      description   : 'This card has no description',
      // Array of Classes on which this card can be used on
      front_cover   : 'images/card-role-back.png',
      back_cover    : 'images/card-back.png',
      width         : SO.options.card_width,
      height        : SO.options.card_height,
      // all onents of the card element
      structure     : null,
      angle         : 0,
      // how much to translate and where to put the graphichs when the canvas is rotated
      _positioning  : []
    });
  },
  rotate    : (function(){
    return function( val ){
      var pos = this._positioning;
      val = (val % 360) / 90;
      var canvas  = this.structure.canvas[0];
      var context = this.structure._context;
      canvas.width  = pos[val][3];
      canvas.height = pos[val][4];
      context.rotate( pos[val][0] );
      context.translate( pos[val][1], pos[val][2] );
      this.restoreState();
      context.translate( -pos[val][1], -pos[val][2] );
      context.rotate( -pos[val][0] );
      this.angle = val * 90;
      return this;
    };
  })(),
  saveState : function(){
    var imageData = this.structure._context.getImageData( 0, 0, this.width, this.height );
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width   = this.width;
    tmpCanvas.height  = this.height;
    tmpCanvas.getContext('2d').putImageData( imageData, 0, 0 );
    this._lastState = tmpCanvas;
    return this;
  },
  restoreState : function(){
    this.structure._context.clearRect( 0, 0, this.width, this.height );
    this.structure._context.drawImage( this._lastState, 0, 0 );
    return this;
  },
  toElement : (function(){
    function auto_generate_paths(){
      var obj = this;
      if( !obj.toElement ) return false;
      var container = obj.structure.main;
      if( obj.sides ){
        for( var j in obj.sides ){
          if( obj.sides[j].hasPath ){
            j = parseInt( j );
            var context = obj.structure._context;
            context.lineWidth   = Math.floor(obj.width / 3.5);
            context.strokeStyle = 'rgb(100,100,100)';
            var ok = false;
            for( var k in obj.sides[j].links ){
              ok  = true;
              k   = parseInt( k );
              draw_path.call( this, context, (j+1)%4, (k+1)%4 );
            };
            if( !ok ){
              var a = getPoint.call( this, j );
              context.moveTo( a.x, a.y );
              switch( j ){
                case '0': context.lineTo( this.width/2, this.height/4 ); break;
                case '1': context.lineTo( this.width*3/4, this.height/2 ); break;
                case '2': context.lineTo( this.width/2, this.height*3/4 ); break;
                case '3': context.lineTo( this.width/4, this.height/2 ); break;
              };
              context.stroke();
            };
          };
        };
      };
      if( obj.hasCrystal ){
        var w = 30;
        var h = 40;
        var x = (obj.width-w) / 2;
        var y = (obj.height-h) / 2;
        addImageAt.call( this, 'images/icon-diamond.png', x, y, w, h );
      };
      if( obj.hasLadder ){
        var w = 40;
        var h = 50;
        var x = (obj.width-w) / 2;
        var y = (obj.height-h) / 2;
        addImageAt.call( this, 'images/icon-ladder.gif', x, y, w, h );
      };
      if( obj instanceof S.GateCard ){
        var w = 60;
        var h = 60;
        var x = (obj.width-w) / 2;
        var y = (obj.height-h) / 2;
        if( obj instanceof S.BlueGateCard )
          addImageAt.call( this, 'images/icon-gate-blue.png', x, y, w, h );
        else
          addImageAt.call( this, 'images/icon-gate-green.png', x, y, w, h );
      };
      this.saveState();
      return true;
    };
    
    function addImageAt( path, x, y, w, h ){
      var self = this;
      P.load( path, function( img ){
        x = x || 0;
        y = y || 0;
        w = w || img.width;
        h = h || img.height;
        self.structure._context.drawImage( img, x, y, w, h );
        self.saveState();
      });
    }
    
    function getPoint( point ){
      point = point % 4;
      var obj = { x:0, y:0 };
      switch( point ){
        case 0: obj.x = this.width/2; break;
        case 1: obj.x = this.width; obj.y = this.height/2; break;
        case 2: obj.x = this.width/2; obj.y = this.height; break;
        case 3: obj.y = this.height/2; break;
      };
      return obj;
    };
    
    function draw_path( context, x, y ){
      var a = getPoint.call( this, x );
      var b = getPoint.call( this, y );
      context.moveTo( a.x, a.y );
      context.quadraticCurveTo( this.width/2, this.height/2, b.x, b.y );
      context.stroke();
    };
    
    function setup(){
      this._positioning = [ // [angle, x offset, y offset, translate-x, translate-y]
        [ 0, 0, 0, this.width, this.height ],  
        [ Math.PI/2, 0, -this.height, this.height, this.width ],
        [ Math.PI, -this.width, -this.height, this.width, this.height ],
        [ Math.PI*3/2, -this.width, 0, this.height, this.width ] 
      ];
      var struct = this.structure;
      
      if( this.tapped ){
        addImageAt.call( this, 
                         SO.images[this._className].back_cover, 
                         0, 
                         0, 
                         this.width,
                         this.height
                       );
      } else if( this instanceof S.PathCard ){
        auto_generate_paths.call( this );
      } else {
        addImageAt.call( this, 
                         SO.images[this._className].front_cover, 
                         0, 
                         0, 
                         this.width,
                         this.height
                       );
      };
      this.saveState();
    };
    return function(){
      if( !this.structure ){
        this.structure = {
          main        : $(document.createElement('span')),
          name        : $(document.createElement('span')),
          canvas      : $(document.createElement('canvas')),
          description : $(document.createElement('span')),
          overlay     : $(document.createElement('a')),
          _context    : null
        };
        this.structure._context = this.structure.canvas[0].getContext('2d');
        this.structure.name
          .attr('class', 'card-name')
          .html( this.name );
        this.structure.canvas.attr({
          'class'   : 'card-canvas',
          'width'   : this.width,
          'height'  : this.height
        });
        this.structure.description
          .attr('class', 'card-description')
          .html( this.description );
        this.structure.overlay
          .attr({
            'class' : 'card-overlay',
            'href'  : 'javascript:void(0)'
          });
        var self = this;
        this.structure.main
          .data( 'card', this )
          .attr( 'class', SO.classes.card )
          .append( this.structure.name, this.structure.canvas, 
                   this.structure.description, this.structure.overlay )
          .bind('mouseenter.toggleName', function(){
            self.structure.name.slideDown( 'fast' );
          }).bind('mouseleave.toggleName', function(){
            self.structure.name.hide();
          }).trigger('mouseleave.toggleName');
        setup.call( this );
      };
      return this.structure.main;
    };
  })()
});