<?php
  
  define( 'DIR_LIB', 'lib/' );
  
  $cls = '.class.js';
  $includes = array(
    'require_first' => array( "logger.js", "inheritance.js", "Utils.js", 
                              "Preloader.js", "SaboteurOptions.js", "Map$cls", "Card$cls", 
                              "ActionCard$cls", "PathCard$cls", "GoalCard$cls", "LadderPathCard$cls" ),
    'require_last'  => array( "Saboteur$cls", "SaboteurClient$cls" ),
    'exclude'       => array( "Map$cls" )
  );
  $first    = array_flip( $includes['require_first'] );
  $last     = array_flip( $includes['require_last'] );
  $exclude  = array_flip( $includes['exclude'] );
  
  $view = $_GET['view'] ? $_GET['view'] : 'list';
  
  $list = array();
  foreach( $includes['require_first'] as $v ){
    if( !file_exists( DIR_LIB.$v ) ){
      exit( ' [FILE NOT FOUND] '.DIR_LIB.$v );
    } else {
      $list[] = DIR_LIB.$v;
    }
  }

  $files = scandir( DIR_LIB );
  foreach( $files as $v ){
    if( $v == '.' || $v == '..' ) continue;
    if( !isset($first[$v]) && !isset($last[$v]) && !isset($exclude[$v]) && substr( $v, -3 ) == '.js' ){
      $list[] = DIR_LIB.$v;
    }
  }
  
  foreach( $includes['require_last'] as $v ){
    if( !file_exists( DIR_LIB.$v ) ){
      exit( ' [FILE NOT FOUND] '.DIR_LIB.$v );
    } else {
      $list[] = DIR_LIB.$v;
    }
  }
  
  switch( $view ){
    case 'script': echo print_script( $list ); break;
    case 'json': echo json_encode( $list ); break;
    case 'export': var_export( $list ); break;
    default: case 'list': echo implode(', ', $list); break;
  }
  
  function print_script( $list ){
    $h = '';
    foreach( $list as $k => $v ){
      $h .= '<script type="text/javascript" src="'.$v.'"></script>'."\n";
    }
    return $h;
  }
  
?>