var Logger = {
  _console  : typeof console != 'undefined' && console != null ? {
      log   : typeof console.log == 'function',
      info  : typeof console.info == 'function',
      warn  : typeof console.warn == 'function',
      err   : typeof console.err == 'function'
    } : { log:false, info:false, warn:false, err:false },
  log : function(){
    return this._console.log ? console.log( arguments ) : null;
  },
  info : function(){
    return this._console.info ? console.info( arguments ) : null;
  },
  warn : function(){
    return this._console.warn ? console.warn( arguments ) : null;
  },
  err : function(){
    return this._console.err ? console.err( arguments ) : null;
  }
}; 
