
S.Card = Class.extend({
  width         : SO.options.card_width,
  height        : SO.options.card_height,
  init : function(){
    U.extend( this, {
      name          : 'Card-Name',
      description   : 'This card has no description',
      // Array of Classes on which this card can be used on
      front_cover   : 'images/card-role-back.png',
      back_cover    : 'images/card-back.png',
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
      context.clearRect( -1, -1, this.width + 2, this.height + 2 );
      canvas.width  = pos[val][3];
      canvas.height = pos[val][4];
      context.rotate( pos[val][0] );
      context.translate( pos[val][1], pos[val][2] );
      this.restoreState();
      context.translate( -pos[val][1], -pos[val][2] );
      context.rotate( -pos[val][0] );
      return this;
    };
  })(),
  saveState : function(){
    console.log( this,this.width, this.height );
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
    function auto_generate_paths( obj ){
      if( !obj.toElement ) return false;
      var container = obj.toElement();
      if( obj.sides ){
        for( var j in obj.sides ){
          if( obj.sides[j].hasPath ){
            var context = obj.structure._context;
            context.lineWidth   = 32;
            context.strokeStyle = '#000';
            var ok = false;
            for( var k in obj.sides[j].links ){
              ok = true;
              draw_path.apply( this, [context, j, k] );
            }
            if( !ok ){
              var a = getPoint.apply( this, [j] );
              context.moveTo( a.x, a.y );
              switch( j ){
                case '0': context.lineTo( this.width/2, this.height/4 ); break;
                case '1': context.lineTo( this.width*3/4, this.height/2 ); break;
                case '2': context.lineTo( this.width/2, this.height*3/4 ); break;
                case '3': context.lineTo( this.width/4, this.height/2 ); break;
              }
              context.stroke();
            }
            if( obj.hasDiamond ){
              
            }
            container.data( 'obj', obj );
            $('#main').append( container );
          }
        }
      }
      return true;
    };
    
    function getPoint( point ){
      point = parseInt(point) % 4;
      var obj = { x:0, y:0 };
      switch( point ){
        case 0: obj.x = this.width/2; break;
        case 1: obj.x = this.width; obj.y = this.height/2; break;
        case 2: obj.x = this.width/2; obj.y = this.height; break;
        case 3: obj.y = this.height/2; break;
      }
      return obj;
    };
    
    function draw_path( context, x, y ){
      var a = getPoint( x );
      var b = getPoint( y );
      context.moveTo( a.x, a.y );
      context.quadraticCurveTo( this.thisions.width/2, this.thisions.height/2, b.x, b.y );
      context.stroke();
    };
    
    function setup(){
      var elem = this;
      elem._positioning = [ // [angle, x offset, y offset, translate-x, translate-y]
        [ 0, 0, 0, elem.width, elem.height ],  
        [ Math.PI/2, 0, -elem.height, elem.height, elem.width ],
        [ Math.PI, -elem.width, -elem.height, elem.width, elem.height ],
        [ Math.PI*3/2, -elem.width, 0, elem.height, elem.width ] 
      ];
      var struct = elem.structure;
      if( auto_generate_paths.apply( this, [elem] ) ){
        elem.saveState();
      } else {
        var img = P.img[elem.front_cover];
        struct._front_cover = img;
        struct._context.drawImage( img, 0, 0, elem.width, elem.height );
        elem.saveState();
      }
      /*
      struct.canvas.bind('click.rotate', function(){
        elem.angle += 90;
        console.log( elem );
        elem.rotate( elem.angle );
      });
      */
    }
    return function(){
      if( !this.structure ){
        this.structure = {
          element     : $(document.createElement('span')),
          name        : $(document.createElement('span')),
          canvas      : $(document.createElement('canvas')),
          _context    : null,
          description : $(document.createElement('span'))
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
        this.structure.element
          .data( 'card', this )
          .attr( 'class', SO.classes.card )
          .append( this.structure.name, this.structure.canvas, this.structure.description );
        setup.apply( this );
      }
      return this.structure.element;
    };
  })()
});