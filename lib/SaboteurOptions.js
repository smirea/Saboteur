var SaboteurOptions = SO = {
  options : {
    players       : [  ],
    initialCards  : 6,
    discardCards  : 10,
    healDiscard   : 2,
    healDraw      : 1,
    goldCards     : 1,
    card_width    : 95,
    card_height   : 150,
    // position of every start card. NOTE: the first one must be [0,0]
    startCards    : [ [0,0] ],
    //position of every goal card relative to the start card [0,0]
    goalCards     : [ [2,8], [0,8], [-2,8] ]
  },
  classes : {
    main        : 'Saboteur',
    card        : 'Saboteur-card',
    table       : 'Saboteur-map-table',
    mapTD       : 'Saboteur-map-td',
    cardHolder  : 'Saboteur-map-cardHolder'
  },
  cards : {
    start : {
      FullCrossStartCard  : 1
    },
    goal  : {
      FullCrossGoldCard   : 1,
      CurvedLeftGoalCard  : 1,
      CurvedRightGoalCard : 1
    },
    role  : {
      BlueGoldDigger   : 4,
      GreenGoldDigger  : 4,
      Boss              : 1,
      Geologist         : 2,
      Profiteer         : 1,
      Saboteur          : 3
    },
    path : {
      RightCrystalCard                : 1,
      TopCrystalCard                  : 1,
      FullCrossCrystalCard            : 1,
      VerticalCrossCrystalCard        : 3,
      HorizontalCrossCrystalCard      : 1,
      BlockHorizontalCrossCrystalCard : 1,
      BlockVerticalCrossCrystalCard   : 1,
      BlockVerticalLineCrystalCard    : 1,
      HorizontalBlueGatePath          : 1,
      VerticalBlueGatePath            : 1,
      LeftCurvedBlueGatePath          : 1,
      BlockHorizontalGreenGatePath    : 1,
      VerticalGreenGatePath           : 1,
      RightCurvedGreenGatePath        : 1,
      TopLadderPath                   : 1,
      RightLadderPath                 : 1,
      CurvedRightLadderPath           : 1,
      CurvedLeftLadderPath            : 1,
      FullCrossPathCard               : 5,
      HorizontalCrossPathCard         : 5,
      VerticalCrossPathCard           : 5,
      CurvedRightPathCard             : 4,
      CurvedLeftPathCard              : 5,
      VerticalPathCard                : 3,
      HorizontalPathCard              : 4,
      DoubleCurvePathCard             : 2,
      BridgePathCard                  : 2,
      BlockFullCrossPathCard          : 1,
      BlockVerticalCrossPathCard      : 1,
      BlockHorizontalCrossPathCard    : 1,
      BlockVerticalPathCard           : 1,
      BlockHorizontalPathCard         : 1,
      BlockTopPathCard                : 1,
      BlockRightPathCard              : 1,
      BlockTopRightPathCard           : 1,
      BlockTopLeftPathCard            : 1      
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
      ViewGoalCard  : 6,
      Theft         : 4,
      HandsOff      : 3,
      SwapHand      : 2,
      Inspection    : 2,
      SwapHats      : 2,
      Trapped       : 3,
      FreeAtLast    : 4
    }
  },
  images : {
    Card : {
      front_cover : 'images/cards/Card-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/Card-icon.png'
    },
    MapClient : {
      front_cover : 'images/cards/MapClient-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/MapClient-icon.png'
    },
    ActionCard : {
      front_cover : 'images/cards/ActionCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/ActionCard-icon.png'
    },
    BrokenLamp : {
      front_cover : 'images/cards/BrokenLamp-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BrokenLamp-icon.png'
    },
    BrokenCart : {
      front_cover : 'images/cards/BrokenCart-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BrokenCart-icon.png'
    },
    BrokenPickaxe : {
      front_cover : 'images/cards/BrokenPickaxe-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BrokenPickaxe-icon.png'
    },
    Lamp : {
      front_cover : 'images/cards/Lamp-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/Lamp-icon.png'
    },
    Cart : {
      front_cover : 'images/cards/Cart-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/Cart-icon.png'
    },
    Pickaxe : {
      front_cover : 'images/cards/Pickaxe-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/Pickaxe-icon.png'
    },
    LampPickaxe : {
      front_cover : 'images/cards/LampPickaxe-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/LampPickaxe-icon.png'
    },
    PickaxeCart : {
      front_cover : 'images/cards/PickaxeCart-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/PickaxeCart-icon.png'
    },
    CartLamp : {
      front_cover : 'images/cards/CartLamp-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/CartLamp-icon.png'
    },
    Rockfall : {
      front_cover : 'images/cards/Rockfall-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/Rockfall-icon.png'
    },
    ViewGoalCard : {
      front_cover : 'images/cards/ViewGoalCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/ViewGoalCard-icon.png'
    },
    Theft : {
      front_cover : 'images/cards/Theft-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/Theft-icon.png'
    },
    HandsOff : {
      front_cover : 'images/cards/HandsOff-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/HandsOff-icon.png'
    },
    SwapHand : {
      front_cover : 'images/cards/SwapHand-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/SwapHand-icon.png'
    },
    Inspection : {
      front_cover : 'images/cards/Inspection-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/Inspection-icon.png'
    },
    SwapHats : {
      front_cover : 'images/cards/SwapHats-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/SwapHats-icon.png'
    },
    Trapped : {
      front_cover : 'images/cards/Trapped-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/Trapped-icon.png'
    },
    FreeAtLast : {
      front_cover : 'images/cards/FreeAtLast-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/FreeAtLast-icon.png'
    },
    CrystalCard : {
      front_cover : 'images/cards/CrystalCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/CrystalCard-icon.png'
    },
    RightCrystalCard : {
      front_cover : 'images/cards/RightCrystalCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/RightCrystalCard-icon.png'
    },
    TopCrystalCard : {
      front_cover : 'images/cards/TopCrystalCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/TopCrystalCard-icon.png'
    },
    FullCrossCrystalCard : {
      front_cover : 'images/cards/FullCrossCrystalCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/FullCrossCrystalCard-icon.png'
    },
    HorizontalCrossCrystalCard : {
      front_cover : 'images/cards/HorizontalCrossCrystalCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/HorizontalCrossCrystalCard-icon.png'
    },
    BlockHorizontalCrossCrystalCard : {
      front_cover : 'images/cards/BlockHorizontalCrossCrystalCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BlockHorizontalCrossCrystalCard-icon.png'
    },
    VerticalCrossCrystalCard : {
      front_cover : 'images/cards/VerticalCrossCrystalCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/VerticalCrossCrystalCard-icon.png'
    },
    BlockVerticalCrossCrystalCard : {
      front_cover : 'images/cards/BlockVerticalCrossCrystalCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BlockVerticalCrossCrystalCard-icon.png'
    },
    BlockVerticalLineCrystalCard : {
      front_cover : 'images/cards/BlockVerticalLineCrystalCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BlockVerticalLineCrystalCard-icon.png'
    },
    GateCard : {
      front_cover : 'images/cards/GateCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/GateCard-icon.png'
    },
    HorizontalBlueGatePath : {
      front_cover : 'images/cards/HorizontalBlueGatePath-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/HorizontalBlueGatePath-icon.png'
    },
    VerticalBlueGatePath : {
      front_cover : 'images/cards/VerticalBlueGatePath-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/VerticalBlueGatePath-icon.png'
    },
    LeftCurvedBlueGatePath : {
      front_cover : 'images/cards/LeftCurvedBlueGatePath-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/LeftCurvedBlueGatePath-icon.png'
    },
    BlockHorizontalGreenGatePath : {
      front_cover : 'images/cards/BlockHorizontalGreenGatePath-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BlockHorizontalGreenGatePath-icon.png'
    },
    VerticalGreenGatePath : {
      front_cover : 'images/cards/VerticalGreenGatePath-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/VerticalGreenGatePath-icon.png'
    },
    RightCurvedGreenGatePath : {
      front_cover : 'images/cards/RightCurvedGreenGatePath-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/RightCurvedGreenGatePath-icon.png'
    },
    GoalCard : {
      front_cover : 'images/cards/GoalCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/GoalCard-icon.png'
    },
    CurvedLeftGoalCard : {
      front_cover : 'images/cards/CurvedLeftGoalCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/CurvedLeftGoalCard-icon.png'
    },
    CurvedRightGoalCard : {
      front_cover : 'images/cards/CurvedRightGoalCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/CurvedRightGoalCard-icon.png'
    },
    GoldCard : {
      front_cover : 'images/cards/GoldCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/GoldCard-icon.png'
    },
    FullCrossGoldCard : {
      front_cover : 'images/cards/FullCrossGoldCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/FullCrossGoldCard-icon.png'
    },
    LadderPathCard : {
      front_cover : 'images/cards/LadderPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/LadderPathCard-icon.png'
    },
    RightLadderPath : {
      front_cover : 'images/cards/RightLadderPath-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/RightLadderPath-icon.png'
    },
    TopLadderPath : {
      front_cover : 'images/cards/TopLadderPath-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/TopLadderPath-icon.png'
    },
    CurvedRightLadderPath : {
      front_cover : 'images/cards/CurvedRightLadderPath-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/CurvedRightLadderPath-icon.png'
    },
    CurvedLeftLadderPath : {
      front_cover : 'images/cards/CurvedLeftLadderPath-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/CurvedLeftLadderPath-icon.png'
    },
    PathCard : {
      front_cover : 'images/cards/PathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/PathCard-icon.png'
    },
    HorizontalPathCard : {
      front_cover : 'images/cards/HorizontalPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/HorizontalPathCard-icon.png'
    },
    VerticalPathCard : {
      front_cover : 'images/cards/VerticalPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/VerticalPathCard-icon.png'
    },
    FullCrossPathCard : {
      front_cover : 'images/cards/FullCrossPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/FullCrossPathCard-icon.png'
    },
    HorizontalCrossPathCard : {
      front_cover : 'images/cards/HorizontalCrossPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/HorizontalCrossPathCard-icon.png'
    },
    VerticalCrossPathCard : {
      front_cover : 'images/cards/VerticalCrossPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/VerticalCrossPathCard-icon.png'
    },
    CurvedRightPathCard : {
      front_cover : 'images/cards/CurvedRightPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/CurvedRightPathCard-icon.png'
    },
    CurvedLeftPathCard : {
      front_cover : 'images/cards/CurvedLeftPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/CurvedLeftPathCard-icon.png'
    },
    DoubleCurvePathCard : {
      front_cover : 'images/cards/DoubleCurvePathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/DoubleCurvePathCard-icon.png'
    },
    BridgePathCard : {
      front_cover : 'images/cards/BridgePathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BridgePathCard-icon.png'
    },
    BlockFullCrossPathCard : {
      front_cover : 'images/cards/BlockFullCrossPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BlockFullCrossPathCard-icon.png'
    },
    BlockVerticalCrossPathCard : {
      front_cover : 'images/cards/BlockVerticalCrossPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BlockVerticalCrossPathCard-icon.png'
    },
    BlockHorizontalCrossPathCard : {
      front_cover : 'images/cards/BlockHorizontalCrossPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BlockHorizontalCrossPathCard-icon.png'
    },
    BlockVerticalPathCard : {
      front_cover : 'images/cards/BlockVerticalPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BlockVerticalPathCard-icon.png'
    },
    BlockHorizontalPathCard : {
      front_cover : 'images/cards/BlockHorizontalPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BlockHorizontalPathCard-icon.png'
    },
    BlockTopPathCard : {
      front_cover : 'images/cards/BlockTopPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BlockTopPathCard-icon.png'
    },
    BlockRightPathCard : {
      front_cover : 'images/cards/BlockRightPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BlockRightPathCard-icon.png'
    },
    BlockTopRightPathCard : {
      front_cover : 'images/cards/BlockTopRightPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BlockTopRightPathCard-icon.png'
    },
    BlockTopLeftPathCard : {
      front_cover : 'images/cards/BlockTopLeftPathCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/BlockTopLeftPathCard-icon.png'
    },
    RoleCard : {
      front_cover : 'images/cards/RoleCard-cover-front.png',
      back_cover  : 'images/cards/Role-cover-back.png',
      icon        : 'images/cards/RoleCard-icon.png'
    },
    BlueGoldDigger : {
      front_cover : 'images/cards/BlueGoldDigger-cover-front.png',
      back_cover  : 'images/cards/Role-cover-back.png',
      icon        : 'images/cards/BlueGoldDigger-icon.png'
    },
    GreenGoldDigger : {
      front_cover : 'images/cards/GreenGoldDigger-cover-front.png',
      back_cover  : 'images/cards/Role-cover-back.png',
      icon        : 'images/cards/GreenGoldDigger-icon.png'
    },
    Boss : {
      front_cover : 'images/cards/Boss-cover-front.png',
      back_cover  : 'images/cards/Role-cover-back.png',
      icon        : 'images/cards/Boss-icon.png'
    },
    Geologist : {
      front_cover : 'images/cards/Geologist-cover-front.png',
      back_cover  : 'images/cards/Role-cover-back.png',
      icon        : 'images/cards/Geologist-icon.png'
    },
    Profiteer : {
      front_cover : 'images/cards/Profiteer-cover-front.png',
      back_cover  : 'images/cards/Role-cover-back.png',
      icon        : 'images/cards/Profiteer-icon.png'
    },
    Saboteur : {
      front_cover : 'images/cards/Saboteur-cover-front.png',
      back_cover  : 'images/cards/Role-cover-back.png',
      icon        : 'images/cards/Saboteur-icon.png'
    },
    StartCard : {
      front_cover : 'images/cards/StartCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/StartCard-icon.png'
    },
    FullCrossStartCard : {
      front_cover : 'images/cards/FullCrossStartCard-cover-front.png',
      back_cover  : 'images/cards/Card-cover-back.png',
      icon        : 'images/cards/FullCrossStartCard-icon.png'
    }
  }
};