var SaboteurServer = Saboteur.extend({
  init    : function() {
    this._super();
  },
  
  handleDiscard : function(cards) {
    for (var i in cards) {
      console.log(i);
      console.log(this.com);
      if (i >= this.com.opt.startingCards) {
        //TODO: continue here
      };
    }
  },
  
  handleTargetPerson : function(cardID, personID) {
    
  },
  
  handleTargetMap : function(cardID, posx, posy) {
  
  },
  
  handleHeal : function(cards, target) {
  
  }
});
