<?php

  define( 'FILE_CLASSES', 'scripts/classes.dump' );
  
  if( !isset($argv[1]) ){
    exit( " [ERROR] You must specify a valid root path\n" );
  }
  $root = $argv[1];
  
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
      $paths = array(
        'front' => $root."images/cards/$v-cover-front.png",
        'back'  => $root."images/$back-cover-back.png",
        'icon'  => $root."images/cards/$v-icon.png"
      );
      $final[] = <<<OBJECT
    $v : {
      front_cover : '$paths[front]',
      back_cover  : '$paths[back]',
      icon        : '$paths[icon]'
    }
OBJECT;

    };
  };
  
  echo implode(",\n", $final);
?>