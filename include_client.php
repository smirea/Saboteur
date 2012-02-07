<?php
  
  define( 'IS_CLI', PHP_SAPI === 'cli' );
  
  if( IS_CLI ){
    define( 'VIEW', $argv && $argv[1] ? $argv[1] : 'list' );
    define( 'ROOT', '' );
  } else {
    define( 'VIEW', isset( $_REQUEST['view'] ) ? $_REQUEST['view'] : 'script' );
    define( 'ROOT', 'http://' . $_SERVER['HTTP_HOST'] . '/' . basename($_SERVER['REQUEST_URI']) . '/' );
  }
  
  $scripts = array(
    'client/jquery/jquery.js',
    'client/jquery/jquery.mouseToken.js',
    'client/jquery/jquery.progressBar.js',
    'lib/logger.js',
    'lib/inheritance.js',
    'lib/Utils.js',
    'lib/Factory.class.js',
    'client/Preloader.js',
    'lib/SaboteurOptions.js',
    'client/SaboteurOptions.js',
    'lib/Card.abstract.js',
    'client/Card.abstract.js',
    'lib/DummyCard.abstract.js',
    'lib/GameCard.abstract.js',
    'lib/MapCard.abstract.js',
    'lib/Map.class.js',
    'client/ClientMap.class.js',
    'lib/ActionCard.class.js',
    'lib/PathCard.abstract.js',
    'client/PathCard.abstract.js',
    'lib/PathCard.class.js',
    'lib/GoalCard.class.js',
    'lib/LadderPathCard.class.js',
    'lib/RoleCard.class.js',
    'lib/CrystalPathCard.class.js',
    'lib/GatePathCard.class.js',
    'lib/GoldCard.class.js',
    'lib/Hand.class.js',
    'client/ClientHand.class.js',
    'client/HiddenHand.class.js',
    'lib/Player.class.js',
    'client/ClientPlayer.class.js',
    'client/HiddenPlayer.class.js',
    'lib/Protocol.js',
    'lib/StartCard.class.js',
    'lib/Saboteur.class.js',
    'client/ClientSaboteur.class.js'
  );
  
  switch( VIEW ){
    case 'script': echo print_script( $scripts ); break;
    case 'json': echo json_encode( $scripts ); break;
    case 'export': var_export( $scripts ); break;
    case 'string': echo implode(', ', $scripts); break;
    default: case 'list': echo implode( "\n", $scripts)."\n"; break;
  }
  
  function print_script( $list ){
    $arr = array();
    foreach( $list as $k => $v ){
      $arr[] = '<script src="'.ROOT.$v.'" type="text/javascript" language="javascript"></script>';
    }
    return implode("\n", $arr)."\n";
  }
  
?>