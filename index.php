
<link type="text/css" rel="stylesheet" href="css/Saboteur.css" />

<script src="js/jquery.js"></script>
<script src="js/jquery.mouseToken.js"></script>
<?php 
  $_GET['view'] = 'script'; 
  require_once('include_lib.php'); 
?>

<script>
  $(function(){
    var client = new SaboteurClient({});
  });
</script>

<div id="Saboteur"></div>