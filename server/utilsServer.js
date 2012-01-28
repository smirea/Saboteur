(function(){
  
  var includes = [
    '../lib/inheritance.js',
    '../lib/logger.js',
    '../lib/Utils.js',
    '../lib/Protocol.js',
    '../lib/Player.class.js',
    '../lib/SaboteurOptions.js',
    '../lib/Card.class.js',
    '../lib/PathCard.class.js',
    '../lib/ActionCard.class.js',
    '../lib/RoleCard.class.js',
    '../lib/CrystalPathCard.class.js',
    '../lib/GatePathCard.class.js',
    '../lib/LadderPathCard.class.js',
    '../lib/GoalCard.class.js',
    '../lib/GoldCard.class.js',
    '../lib/Factory.class.js',
    '../lib/Map.class.js',
    '../lib/Saboteur.class.js',
    './SaboteurServer.class.js'
  ];
  
  for( var i in includes ){
    console.log('*** INCLUDING :', includes[i]);
    include( includes[i] );
  }
  
})();
