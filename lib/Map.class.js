//
//
//
// BUG_ON(bool)
// PathCard.opposite(direction)
//

// MOVE TO UTILS
S.Position = Class.extend({
    init        : function(x, y) {
        this.x = x;
        this.y = y;
    }
    neighbourAt : function(direction)
    {
        switch(direction) {
        case 0:
            return new S.Position(this.x, this.y + 1)
        case 1:
            return new S.Position(this.x + 1, this.y)
        case 2:
            return new S.Position(this.x, this.y - 1)
        case 3:
            return new S.Position(this.x - 1, this.y)
        default:
            BUG_ON(true);
        }
    }
});


S.Map = Class.extend({
    init        : function() { },
    positions   : {},
    
    cardAt      : function(aPosition) {
        return this.positions[aPosition]
    }

    removeCard  : function(aPosition) {
        delete this.positions[aPosition]
    }

    check       : (function() {
        function oposite(aCard, aDirection) {
            sad
            switch(aDirection)
            {
            case 0:
                asd
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            default:
                BUG_ON(true);
            }
        }
        return function(aPosition, aPathCard) {
            if undefined(this.positions[aPosition]) {
                for i in [0, 1, 2, 3] {
                    var card = this.cardAt(i)
                    if undefined(card) {
                        continue;
                    }
                    if (card.sides[card.opposite(i)] != aPathCard.sides[i])
                        return false;
                }
                return true;
            } else {
                return false;
            }
        }
    })(),
});
