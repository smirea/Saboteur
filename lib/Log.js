var Color = (function Color_object () {
  var in_terminal = (this.toString() == '[object global]');
  var obj = {
    in_terminal: in_terminal,
    modifiers: {
      normal: 0,
      light: 1,
      underline: 4,
      background: 7
    },
    colors: {
      red: 31,
      green: 32,
      yellow: 33,
      blue: 34,
      purple: 35,
      cyan: 36,
      gray: 37,
      black: 30
    },
    init: function init () {
      for (var name in this.colors) {
        if (name in this) {
          throw new Error("Color would overwrite a native method!");
        }
        (function add_method (obj, name) {
          obj[name] = function colorize (str) {
            return obj.colorize(name, str);
          };
        })(this, name);
      }
      return this;
    },
    colorize: function colorize (color, str) {
      return this.get(color) + str + this.reset();
    },
    get: function get (str) {
      var arr = str.split(';');
      if (arr.length == 1) {
        arr = [this.modifiers.normal, arr[0]];
      } else {
        var match = arr[0];
        arr[0] = this.modifiers.normal;
        for (var name in this.modifiers) {
          if (name.indexOf(match) === 0) {
            arr[0] = this.modifiers[name];
            break;
          }
        }
      }
      arr[1] = this.colors[arr[1]];
      return this._make_color(arr[1], arr[0]);
    },
    reset: function reset () {
      return this._make_color(0);
    },
    _make_color: !in_terminal ? function _no_color () {
        return '';
      } : function _make_color (color, modifier) {
        return '\u001b[' + (modifier || this.modifiers.normal) + ';' + color + 'm';
      }
  };

  obj.init();

  return obj;
})();

var Logger = function (target, name) {
  this.name = name;
  this.indentation = "   ";
  this._groups = [];

  if (!this.name) {
    try {
      throw new Error("I will capture the stack");
    } catch (e) {
      var stack = e.stack.split("\n");
      var name = stack[2].split(/\s+/);
      name = name[2].split('.');
      name = name[name.length - 1];
      this.name = name;
    }
  }

  this.group = function group (name) {
    this._message(Color.colorize('l;yellow', this.name + ' (' + name + '):'));
    this._groups.push(name);
    return this;
  };

  this.group_end = function group_end () {
    this._groups.pop()
    return this;
  }

  this.log = function log () {
    var func_name = arguments.callee.caller.name;
    var args = this._to_array(arguments);
    args.unshift(this._make_name(func_name));
    return this._message(args);
  };

  this.debug = function debug () {
    var func_name = arguments.callee.caller.name;
    var args = this._to_array(arguments);
    args.unshift(this._make_name(func_name), Color.colorize('cyan', 'DEBUG'));
    return this._message(args);
  };

  this._message = function _message (args) {
    if (typeof args !== 'object' || args.length === undefined) {
      args = [args];
    }
    if (this._groups.length) {
      args.unshift(this._repeat(this._groups.length, this.indentation));
    }
    return console.log.apply(console, args);
  }

  this._repeat = function _repeat (count, str) {
    if (count <= 0) {
      return '';
    }
    var arr = [];
    while (--count >= 0) {
      arr.push(str);
    }
    return arr.join('');
  }

  this._make_name = function _make_name (func_name) {
    var str = [this.name, func_name];
    str = str.filter(function remove_null (v) { return !!v; });
    str = '[' + str.join('.') + ']';
    return Color.colorize('l;gray', str);
  };

  this._to_array = function _to_array (args) {
    return Array.prototype.slice.call(args, 0);
  };
};

function A () {
  this._log = new Logger(this);
}
A.prototype = Object.freeze({
  call_log: function call_log () {
    this._log.log.apply(this._log, arguments);
  },
  call_debug: function call_debug () {
    this._log.debug.apply(this._log, arguments);
  }
});

// var log = new Logger(this);
// log.log('aaa');
// return;

var a = new A();
a.call_log('aaa', 'bbb', 'ccc');
a.call_debug('ddd', 'eee', 'fff');

function B () {
  this.a = 2;
  this._log = new Logger(this);
  this.call_b_debug = function call_debug () {
    this._log.debug.apply(this._log, [Color.colorize('l;red', '<B>')].concat(this._log._to_array(arguments)));
  }
}
B.prototype = Object.create(new A);
var b = new B();
b._log.group('Level 1');
b.call_debug("BBBB");
b._log.group('Level 2');
b.call_b_debug("BBBB");
b._log.group_end();
b.call_b_debug("CCC");
b._log.group_end();
