var SaboteurOptions = SO = {
  options : {
    players       : [  ],
    initialCards  : 20,
    discardCards  : 10,
    healDiscard   : 2,
    healDraw      : 1,
    goldCards     : 1,
    // position of every start card. NOTE: the first one must be [0,0]
    startCards    : [ [0,0] ],
    //position of every goal card relative to the start card [0,0]
    goalCards     : [ [2,4], [0,4], [-2,4] ]
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
      HorizontalBlueGateCard          : 1,
      VerticalBlueGateCard            : 1,
      LeftCurvedBlueGatePath          : 1,
      BlockHorizontalGreenGateCard    : 1,
      VerticalGreenGateCard           : 1,
      RightCurvedGreenGateCard        : 1,
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
  }
};
