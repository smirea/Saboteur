<?php
  
  define( 'DIR_LIB', 'lib/' );
  
  $scripts = array(
    'client/jquery.js',
    'client/jquery.mouseToken.js',
    'client/jquery.progressBar.js',
    'lib/logger.js',
    'lib/inheritance.js',
    'lib/Utils.js',
    'client/UtilsClient.js',
    'lib/Factory.class.js',
    'lib/Preloader.js',
    'lib/SaboteurOptions.js',
    'lib/Map.class.js',
    'lib/MapClient.class.js',
    'lib/Card.class.js',
    'lib/ActionCard.class.js',
    'lib/PathCard.class.js',
    'lib/GoalCard.class.js',
    'lib/LadderPathCard.class.js',
    'lib/RoleCard.class.js',
    'lib/CrystalPathCard.class.js',
    'lib/GatePathCard.class.js',
    'lib/GoldCard.class.js',
    'lib/Player.class.js',
    'lib/Protocol.js',
    'lib/StartCard.class.js',
    'lib/Saboteur.class.js',
    'lib/SaboteurClient.class.js'
  );

  $view = isset( $_GET['view'] ) ? $_GET['view'] : 'list';
  switch( $view ){
    case 'script': echo print_script( $scripts ); break;
    case 'json': echo json_encode( $scripts ); break;
    case 'export': var_export( $scripts ); break;
    default: case 'list': echo implode(', ', $scripts); break;
  }
  
  function print_script( $list ){
    $arr = array();
    foreach( $list as $k => $v ){
      $arr[] = '<script src="'.$v.'" type="text/javascript" language="javascript"></script>';
    }
    return implode("\n", $arr)."\n";
  }
  
?>