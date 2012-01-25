
<link type="text/css" rel="stylesheet" href="css/jquery.progressBar.css" />
<link type="text/css" rel="stylesheet" href="css/Saboteur.css" />

<script src="js/jquery.js"></script>
<script src="js/jquery.mouseToken.js"></script>
<script src="js/jquery.progressBar.js"></script>
<?php 
  $_GET['view'] = 'script'; 
  require_once('include_lib.php'); 
?>

<script>
  $(function(){
    var client = new SaboteurClient( $('#Saboteur'), {});
  });
</script>

<div id="Saboteur"></div>