
<link type="text/css" rel="stylesheet" href="css/jquery.progressBar.css" />
<link type="text/css" rel="stylesheet" href="css/Saboteur.css" />

<?php 
  $_GET['view'] = 'script'; 
  require_once('include_lib.php'); 
?>

<script>
  var client;
  $(function(){
    client = new SaboteurClient( $('#Saboteur'), {});
  });
</script>

<div id="Saboteur"></div>