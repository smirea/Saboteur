
S.Card = Class.extend({
  init : function(){
    U.extend( this, {
      name          : 'Card-Name',
      description   : 'This card has no description',
      // Array of Classes on which this card can be used on
      front_cover   : 'images/card-role-back.png',
      back_cover    : 'images/card-back.png',
      width         : SaboteurOptions.options.card_width,
      height        : SaboteurOptions.options.card_height,
      // all components of the card element
      _structure    : null,
      angle         : 0,
      _positioning  : [], // defined in init
    });
  },
  rotate    : (function(){
    return function( val ){
      var pos = this._positioning;
      val = (val % 360) / 90;
      var canvas  = this._structure.canvas[0];
      var context = this._structure._context;
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
    var imageData = this._structure._context.getImageData( 0, 0, this.width, this.height );
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width   = this.width;
    tmpCanvas.height  = this.height;
    tmpCanvas.getContext('2d').putImageData( imageData, 0, 0 );
    this._lastState = tmpCanvas;
    return this;
  },
  restoreState : function(){
    this._structure._context.clearRect( 0, 0, this.width, this.height );
    this._structure._context.drawImage( this._lastState, 0, 0 );
    return this;
  },
  toElement : (function(){
    function auto_generate_paths( obj ){
      if( !obj.toElement ) return false;
      var container = obj.toElement();
      if( obj.sides ){
        for( var j in obj.sides ){
          if( obj.sides[j].hasPath ){
            var context = obj._structure._context;
            context.lineWidth   = 32;
            context.strokeStyle = '#000';
            var ok = false;
            for( var k in obj.sides[j].links ){
              ok = true;
              draw_path( context, j, k );
            }
            if( !ok ){
              var a = getPoint( j );
              context.moveTo( a.x, a.y );
              switch( j ){
                case '0': context.lineTo( opt.width/2, opt.height/4 ); break;
                case '1': context.lineTo( opt.width*3/4, opt.height/2 ); break;
                case '2': context.lineTo( opt.width/2, opt.height*3/4 ); break;
                case '3': context.lineTo( opt.width/4, opt.height/2 ); break;
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
        case 0: obj.x = opt.width/2; break;
        case 1: obj.x = opt.width; obj.y = opt.height/2; break;
        case 2: obj.x = opt.width/2; obj.y = opt.height; break;
        case 3: obj.y = opt.height/2; break;
      }
      return obj;
    };
    
    function draw_path( context, x, y ){
      var a = getPoint( x );
      var b = getPoint( y );
      context.moveTo( a.x, a.y );
      context.quadraticCurveTo( opt.width/2, opt.height/2, b.x, b.y );
      context.stroke();
    };
    
    function setup( elem ){
      elem._positioning = [ // [angle, x offset, y offset, translate-x, translate-y]
        [ 0, 0, 0, elem.width, elem.height ],  
        [ Math.PI/2, 0, -elem.height, elem.height, elem.width ],
        [ Math.PI, -elem.width, -elem.height, elem.width, elem.height ],
        [ Math.PI*3/2, -elem.width, 0, elem.height, elem.width ] 
      ];
      var struct = elem._structure;
      if( auto_generate_paths( elem ) ){
        elem.saveState();
      } else {
        var img = P.img[elem.front_cover];
        struct._front_cover = img;
        struct._context.drawImage( img, 0, 0, elem.width, elem.height );
        elem.saveState();
      }
      struct.canvas.bind('click.rotate', function(){
        elem.angle += 90;
        elem.rotate( elem.angle );
      });
    }
    return function(){
      if( !this._structure ){
        this._structure = {
          element     : $(document.createElement('span')),
          name        : $(document.createElement('span')),
          canvas      : $(document.createElement('canvas')),
          _context    : null,
          description : $(document.createElement('span'))
        };
        this._structure._context = this._structure.canvas[0].getContext('2d');
        this._structure.name
          .attr('class', 'card-name')
          .html( this.name );
        this._structure.canvas.attr({
          'class'   : 'card-canvas',
          'width'   : this.width,
          'height'  : this.height
        });
        this._structure.description
          .attr('class', 'card-description')
          .html( this.description );
        this._structure.element
          .data( 'card', this )
          .attr( 'class', SaboteurOptions.classes.card )
          .append( this._structure.name, this._structure.canvas, this._structure.description );
        setup( this );
      }
      return this._structure.element;
    };
  })(),
  // Events:
  onDraw      : function( player ){},
  onPlay      : function( player, target ){}
});