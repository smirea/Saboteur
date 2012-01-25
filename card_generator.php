<script src="js/jquery.js"></script>
<script src="lib/inheritance.js"></script>
<script src="lib/Utils.js"></script>
<script src="lib/SaboteurOptions.js"></script>
<?php
  $scripts = array( 'Card', 'PathCard', 'CrystalPathCard', 'GatePathCard', 'GoalCard',
                    'LadderPathCard', 'PathCard' );
  foreach( $scripts as $v ){
    echo '<script src="lib/'.$v.'.class.js"></script>';
  }
?>

<link rel="stylesheet" href="css/Saboteur.css" />
<style>
  html{ background : #eaeaea; }
</style>

<script>
  var opt = {
    width       : 120,
    height      : 190,
    lineWidth   : 30,
    strokeStyle : '#000'
  };
  $(function(){
    for( var i in S ){
      var obj = new S[i];
      if( !obj.toElement ) continue;
      var elem = obj.toElement();
      if( obj.sides ){
        for( var j in obj.sides ){
          if( obj.sides[j].hasPath ){
            var context = obj._structure._context;
            context.lineWidth   = opt.lineWidth;
            context.strokeStyle = opt.strokeStyle;
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
            elem.data( 'obj', obj );
            $('#main').append( elem );
            elem.bind( 'click.debug', function(){
              console.log( $(this).data('obj') );
            });
          }
        }
      }
    }
  });
  
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
  }
  
  function draw_path( context, x, y ){
    var a = getPoint( x );
    var b = getPoint( y );
    context.moveTo( a.x, a.y );
    context.quadraticCurveTo( opt.width/2, opt.height/2, b.x, b.y );
    context.stroke();
  }
  
  function canvas_image( path ){
    var canvas  = document.createElement('canvas');
    var context = canvas.getContext('2d');
    
    canvas.width  = opt.width;
    canvas.height = opt.height;
    
    var pos = [
      [ 0, 0, 0, opt.width, opt.height ],
      [ Math.PI/2, 0, -opt.height, opt.height, opt.width ],
      [ Math.PI, -opt.width, -opt.height, opt.width, opt.height ],
      [ Math.PI*3/2, -opt.width, 0, opt.height, opt.width ]
    ];
    
    var img = preload_image(path, function(){
  //    context.drawImage(this, 0, 0, this.width, this.height );
      canvas.onclick();
    });
    
    var x = 0;
    canvas.onclick = function() {
      x = (++x) % 4;
      canvas.width  = pos[x][3];
      canvas.height = pos[x][4];
      context.lineWidth   = opt.lineWidth;
      context.strokeStyle = opt.strokeStyle;
      
      context.rotate( pos[x][0] );
      context.translate( pos[x][1], pos[x][2] );
      context.moveTo( opt.width/2, 0 );
      context.quadraticCurveTo( opt.width/2, opt.height/2, opt.width, opt.height/2 );
      context.moveTo( opt.width/2, opt.height );
      context.quadraticCurveTo( opt.width/2, opt.height/2, 0, opt.height/2 );
      
      context.stroke();
    };
    
    return canvas;
  }
  
  function preload_image( path, callback ){
    var img     = new Image();
    img.onload  = callback;
    img.src     = path;
    return img;
  }
</script>

<body>
  <div id="main">
    
  </div>
</body>