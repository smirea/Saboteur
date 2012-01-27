S.Protocol = Class.extend({
  state   : {
    CORRECT : 0,
    ERROR   : 1
  },
  events  : {
    server : {
      admin : [
        'connect',
        'disconnect',
        'message', // should take this out and use custom protocol instead
      ],
      custom  : [
        'chat',
        'setup',
        'startGame',
        'discard',
        'targetPerson',
        'targetMap',
        'heal'
      ]
    },
    client : {
      admin : [
        'connect',
        'disconnect',
        'reconnect',
        'reconnecting',
        'reconnect_failed',
        'message' // should take this out and use custom protocol instead
      ],
      custom : [
        'chat',
        'setup',
        'result',
        'update'
      ]
    }
  }
});
