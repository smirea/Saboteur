<?php

  define( 'FILE_CLASSES', 'classes.dump' );
  
  $arr = explode("\n", file_get_contents( FILE_CLASSES ) );
  
  $roles = array( 'RoleCard', 'BlueGoldDigger', 'GreenGoldDigger', 'Boss',
                  'Geologist', 'Profiteer', 'Saboteur'
  );
  
  $final = array();
  $bitmask = array();
  foreach( $arr as $v ){
    if( strlen($v) > 0 && !isset($bitmask[$v]) ){
      $bitmask[$v] = true;
      $back = array_search( $v, $roles, true ) === false ? 'Card' : 'Role';
      $final[] = <<<OBJECT
    $v : {
      front_cover : 'images/cards/$v-cover-front.png',
      back_cover  : 'images/cards/$back-cover-back.png',
      icon        : 'images/cards/$v-icon.png'
    }
OBJECT;

    };
  };
  
  echo implode(",\n", $final);
?>