<?php

  define( 'FILE_CLASSES', 'classes.dump' );
  define( 'FILE_DUMMY', 'dummy-card.png' );
  define( 'FOLDER_IMAGES', '../images/cards/' );
  
  $arr = explode("\n", file_get_contents( FILE_CLASSES ) );
  
  foreach( $arr as $v ){
    if( strlen( $v ) > 0 ){
      copy( FILE_DUMMY, FOLDER_IMAGES."$v-cover-front.png" );
    }
    //unlink( FOLDER_IMAGES."$v-cover-front.png" );
  }
  
?>