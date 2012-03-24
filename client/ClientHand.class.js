
var ClientHand = Hand.extend({
  _className : 'ClientHand',
  init  : (function(){
    return function( ids ){
      U.extend( this, {
        selected  : $(),
        structure : {
          main    : $(document.createElement('div')),
          cards   : $(document.createElement('div')),
          actions : {
            main      : $(document.createElement('div')),
            playCard  : $(document.createElement('a')),
            heal      : $(document.createElement('a')),
            discard   : $(document.createElement('a'))
          },
          attributes  : $(document.createElement('div'))
        }
      });
      this._super( ids );
      create_structure.call( this );
    };
    
    function create_structure(){
      this.structure.cards
        .addClass( SO.classes.hand.cards );
      
      for( var i in this.structure.actions ){
        var el = this.structure.actions[i];
        if( el[0].tagName.toLowerCase() == 'a' ){
          el.attr({
              href  : 'javascript:void(0)',
              class : SO.classes.hand.action
            }).html( i );
          this.structure.actions.main.append( el );
        };
      };
      
      var self    = this;
      var accept  = this.structure.actions.accept;
      this.structure.actions.playCard
        .bind( 'click.playCard', function(){
          var cards = client.map.structure.table.find('.'+SO.classes.card);
          cards
            .unbind('click.placeCard')
            .bind('click.placeCard', function(){
              if( self.selected.length != 1 ){
                logger.info('You can only play one card at a time');
                return;
              };
              var pos   = $(this).data('pos');
              var card  = self.selected.eq(0).data('card');
              if( card.execute( true, client.map, pos[0], pos[1], card.isFlipped ) ){
                var event = Protocol.createEvent('targetMap', 'server', 'custom');
                event.data.playerID = gameState.playerID;
                event.data.cardID   = card.id;
                event.data.posx     = pos[0];
                event.data.posy     = pos[1];
                event.data.flipped  = card.isFlipped;
                actions.targetMap.callback(event);
              } else {
                logger.info('You are unable to place that card on that location');
              };
            });
        });
        
      this.structure.actions.heal
        .bind( 'click.heal', function(){
          //TODO: ME!
        });
        
      this.structure.actions.discard
        .bind( 'click.discard', function(){
          if( self.selected.length == 0 ){
            logger.info('Select at least 1 card to discard');
            return;
          };
          var ids = self.selected.map(function(){ 
            return $(this).data('card').id;
          });
          var event = Protocol.createEvent('discard', 'server', 'custom');
          event.data.playerID = gameState.playerID;
          event.data.cards = ids.toArray();
          actions.discard.callback(event);
        });
      
      this.structure.actions.main
        .addClass( SO.classes.hand.actions );
        
      this.structure.main
        .addClass( SO.classes.hand.main )
        .append( this.structure.actions.main, this.structure.cards );
    };
  })(),
  add : function( ids ){
    var self = this;
    if( this._super( ids ) ){
      for( var i in ids ){
        client.factory.get( 'game', ids[i])
          .toElement()
          .appendTo( this.structure.cards )
          .bind( 'click.selectCard', function(){
            if( !$(this).hasClass('selected') ){
              self.selected = self.selected.add( $(this) );
              var card = $(this).data('card');
              card.rotate( card.isFlipped ? 90 : 270 );
              $(this)
                .addClass( 'selected' )
                .trigger( 'mouseenter.toggleInfo' );
            } else {
              $(this).removeClass( 'selected' );
              self.selected = self.selected.not( $(this) );
              $(this).data('card').rotate( 0 );
            };
          });
      };
      return this;
    };
    return null;
  },
  remove : function( ids ){
    if( this._super( ids ) ){
      for( var i in ids ){
        F.get( 'game', ids[i]).toElement().detach();
      };
      return this;
    };
    return null;
  },
  toElement : function(){
    return this.structure.main;
  }
});