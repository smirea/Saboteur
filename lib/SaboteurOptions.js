var SaboteurOptions = {
  options : {
    target        : null,
    players       : [ 'Player_1', 'Player_2', 'Player_3' ],
    startingCards : 6,
    discardCards  : 10,
    goalCards     : 3,
    goldCards     : 1,
    layout        : {
      width     : 7,
      height    : 11,
      startX    : 5,
      startY    : 1,
      goalY     : 9
    }
  },
  classes : {
    main  : 'Saboteur',
    card  : 'Saboteur-card'
  },
  cards : {
    role : {
      GoldDigger_blue   : 4,
      GoldDigger_green  : 4,
      Boss              : 1,
      Geologist         : 2,
      Profiteer         : 1,
      Saboteur          : 3
    },
    path : {
      
    },
    action : {
      Lamp          : 2,
      Cart          : 2,
      Pickaxe       : 2,
      BrokenLamp    : 3,
      BrokenCart    : 3,
      BrokenPickaxe : 3,
      LampPickaxe   : 1,
      PickaxeCart   : 1,
      CartLamp      : 1,
      Rockfall      : 3,
      Map           : 6,
      Theft         : 4,
      HandsOff      : 3,
      SwapHand      : 2,
      Inspection    : 2,
      SwapHats      : 2,
      Trapped       : 3,
      FreeAtLast    : 4
    }
  }
};