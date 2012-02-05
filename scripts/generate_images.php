<?php

  define( 'FILE_CLASSES', 'scripts/classes.dump' );
  define( 'FILE_DUMMY', 'scripts/dummy-card.png' );
  define( 'FOLDER_IMAGES', 'images/cards/' );
  $arr = explode("\n", file_get_contents( FILE_CLASSES ) );

  if( file_exists( FILE_DUMMY ) ){
    foreach( $arr as $v ){
      if( strlen( $v ) > 0 ){
        copy( FILE_DUMMY, FOLDER_IMAGES."$v-cover-front.png" );
      };
      //unlink( FOLDER_IMAGES."$v-cover-front.png" );
    };
  } else {
    echo " [ERROR] Dummy file not found\n ";
  }
  
?>