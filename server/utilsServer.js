(function setup_server_includes (scope) {

  try {
    include('lib/Log.js');
  } catch (ex) {
    console.error(ex.stack);
    scope.Logger = console;
  }

  var includes = [
    'lib/inheritance.js',
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

  try {
    includes.forEach(include_file);
  } catch (ex) {
    Logger.error(ex.stack);
  }

  scope.root = function( dir ){
    //return dir.slice( 0, dir.lastIndexOf('/') );
    return dir;
  };

  function include_file (file) {
    scope.Logger.log('%s %s', Color.yellow('INCLUDE'), file);
    with (scope) {
      include(file);
    }
  }

})(global);
