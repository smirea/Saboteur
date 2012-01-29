<?php

  define( 'FILE_CLASSES', 'scripts/classes.dump' );
  define( 'FILE_DUMMY', 'scripts/dummy-card.png' );
  define( 'FOLDER_IMAGES', 'cards/' );
  
  $arr = explode("\n", file_get_contents( FILE_CLASSES ) );
  
  foreach( $arr as $v ){
    if( strlen( $v ) > 0 ){
      copy( FILE_DUMMY, FOLDER_IMAGES."$v-cover-front.png" );
    }
    //unlink( FOLDER_IMAGES."$v-cover-front.png" );
  }
  
?>