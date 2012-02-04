<?php 
  $_GET['view'] = 'script'; 
  require_once('include_lib.php'); 
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
    var sab = new SaboteurClient( $('#saboteur'), {} );
    
    var namespaces = ['start', 'dummyGoal', 'goal', 'role', 'game'];
    for( var k in namespaces ){
      $('#main').append('<h3>'+namespaces[k]+'</h3>');
      var arr = F.getNamespaces( namespaces[k] );
      var bitmask = {};
      for( var i in arr ){
        if( !arr[i].toElement || bitmask[arr[i]._className] ) continue;
        bitmask[arr[i]._className] = true;
        var container = arr[i].toElement();
        container.data( 'obj', arr[i] );
        container.data( 'name', arr[i]._className );
        $('#main').append( container );
      };
    };
    $('#saboteur').remove();
  });
  

</script>

<body>
  <div id="main">
    
  </div>
  <div id="saboteur"></div>
</body>