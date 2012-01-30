<?php

  define( 'FILE_CLASSES', 'classes.dump' );
  
  $arr = explode("\n", file_get_contents( FILE_CLASSES ) );
  
  $exceptions = array(
    'RoleCard'            => 'Role',
    'BlueGoldDigger'      => 'Role', 
    'GreenGoldDigger'     => 'Role', 
    'Boss'                => 'Role',
    'Geologist'           => 'Role',
    'Profiteer'           => 'Role',
    'Saboteur'            => 'Role',
    'GoalCard'            => 'Goal',
    'CurvedLeftGoalCard'  => 'Goal',
    'CurvedRightGoalCard' => 'Goal',
    'GoldCard'            => 'Goal',
    'FullCrossGoldCard'   => 'Goal'
  );

  $final = array();
  $bitmask = array();
  foreach( $arr as $v ){
    if( strlen($v) > 0 && !isset($bitmask[$v]) ){
      $bitmask[$v] = true;
      $back = isset( $exceptions[$v] ) ? $exceptions[$v] : 'Card';
      $final[] = <<<OBJECT
    $v : {
      front_cover : 'images/cards/$v-cover-front.png',
      back_cover  : 'images/$back-cover-back.png',
      icon        : 'images/cards/$v-icon.png'
    }
OBJECT;

    };
  };
  
  echo implode(",\n", $final);
?>