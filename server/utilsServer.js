(function(){

  var includes = [
    'lib/inheritance.js',
    'lib/logger.js',
    'lib/Utils.js',
    'lib/Protocol.js',
    'lib/Hand.class.js',
    'lib/Player.class.js',
    'lib/SaboteurOptions.js',
    'lib/Card.abstract.js',
    'lib/DummyCard.abstract.js',
    'lib/GameCard.abstract.js',
    'lib/MapCard.abstract.js',
    'lib/PathCard.abstract.js',
    'lib/PathCard.class.js',
    'lib/ActionCard.class.js',
    'lib/RoleCard.class.js',
    'lib/CrystalPathCard.class.js',
    'lib/GatePathCard.class.js',
    'lib/LadderPathCard.class.js',
    'lib/GoalCard.class.js',
    'lib/GoldCard.class.js',
    'lib/StartCard.class.js',
    'lib/Factory.class.js',
    'lib/Map.class.js',
    'lib/Saboteur.class.js',
    'server/ServerSaboteur.class.js'
  ];

  for( var i in includes ){
    console.log(' [INCLUDE] ', includes[i]);
    with (global) {
      include( includes[i] );
    }
  };

  with( global ){
    var root = function( dir ){
      //return dir.slice( 0, dir.lastIndexOf('/') );
      return dir;
    };
  };

})();
