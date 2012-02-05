<?php

  define( 'FILE_CLASSES', 'scripts/inheritance_chain.dump' );
  define( 'DELIMITER', ' :: ' );
  
  $arr = explode("\n", file_get_contents( FILE_CLASSES ) );
  
  $chain = array();
  
  foreach( $arr as $v ){
    if( strlen( $v ) > 0 ){
      $cls = explode( DELIMITER, $v );
      $chain[ $cls[0] ] = $cls[1];
    };
  };
  
  var_export( $chain );
  
?>