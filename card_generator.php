<script src="js/jquery.js"></script>
<script src="lib/inheritance.js"></script>
<script src="lib/U.js"></script>
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
    strokeStyle : '#000000'
  };
  $(function(){
    for( var i in S ){
      var obj = new S[i];
      if( !obj.toElement ) continue;
      var container = obj.toElement();
      container.data( 'obj', obj );
      container.data( 'name', i );
      $('#main').append( container );
      container.bind( 'click.debug', function(){
        console.log( $(this).data('name'), $(this).data('obj') );
      });
    }
  });
  

</script>

<body>
  <div id="main">
    
  </div>
</body>