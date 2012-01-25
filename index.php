
<link type="text/css" rel="stylesheet" href="css/Saboteur.css" />

<script src="js/jquery.js"></script>
<script src="js/jquery.mouseToken.js"></script>
<script src="lib/inheritance.js"></script>
<script src="lib/Utils.js"></script>
<script src="lib/SaboteurOptions.js"></script>
<script src="lib/Card.class.js"></script>
<script>
  $(function(){
    $('#Saboteur').append( new S.Card().toElement() );
  });
</script>

<div id="Saboteur"></div>