/**
 * Output colors strings and fallback when they are not supported
 * @example
  console.log(
    'Red: %s, Green: %s, Blue: %s, Light-Yellow: %s, Background-Cyan: %s, Underline-Purple: %s',
    Color.red('red'),
    Color.green('green'),
    Color.colorize('blue', 'blue'),
    Color.colorize('l;yellow', 'light-yellow'),
    Color.colorize('b;cyan', 'background-cyan'),
    Color.colorize('u;purple', 'underline-purple')
  );
 */
Color = (function Color_object () {
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
      arr[1] = arr[1] ? this.colors[arr[1]] : this.colors.gray;
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

/**
 * A colorful Logger class
 * @param {string} name If no name is given, one will be parsed automatically
 *                        form the stack trace
 * @example
    function B () {
      this.call_b_debug = function call_debug () {
        Logger.log('aloha');
        Logger.group('going once');
        Logger.log('aha');
        Logger.group('going twice');
        Logger.log('lets debug');
        Logger.warn('and give a warning');
        Logger.error('ouch an error');
        Logger.group_end();
        Logger.log('more debugging');
        Logger.log('more debugging');
        Logger.group_end();
        Logger.log('and more logging');
      }
      this.call_b_debug();
    }

    new B();
 *
 */

Logger = {
  indentation: '  ',
  default_stack_line: 3,
  stack_line_structure: {
    regexp: /\s*at (new )?([a-zA-Z0-9_.<>]+) (\[as (.*)\] )?\(((.*):([0-9]+):([0-9]+)|.*)\)/,
    order: [null, null, 'name', null, 'as', null, 'file', 'line', 'column']
  },
  _groups: [],
  get_stack_object: function _get_stack (slice_begin) {
    var e = new Error('I will capture the stack');
    var lines = e.stack.split("\n").slice(1);
    var result = [];
    var order = Logger.stack_line_structure.order;
    for (var i=slice_begin || 0; i<lines.length; ++i) {
      var parsed = Logger.stack_line_structure.regexp.exec(lines[i]);
      if (!parsed) {
        console.log("[ERROR] Unable to parse `%s`", lines[i]);
        continue;
      }
      var structure = {};
      for (var j=0; j<order.length; ++j) {
        if (order[j] === null || parsed[j] === undefined) {
          continue;
        }
        structure[order[j]] = parsed[j];
      }
      result.push(structure);
    }
    return result;
  },
  get_caller: function get_caller (line) {
    line = line || Logger.default_stack_line;
    return Logger.get_stack_object(line).slice(0, 1)[0];
  },
  _repeat: function _repeat (count, str) {
    if (count <= 0) {
      return '';
    }
    var arr = [];
    while (--count >= 0) {
      arr.push(str);
    }
    return arr.join('');
  },

  _to_array: function _to_array (args) {
    return Array.prototype.slice.call(args, 0);
  },

  _make_name: function _make_name (caller) {
    return Color.colorize('l;gray', '[' + caller.name) + Color.colorize('gray', ':' + caller.line) + Color.colorize('l;gray', ']');
  },

  _prepend_strings: function _prepend_strings (arr) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (arr[0] && typeof arr[0] == 'string' && arr[0].indexOf('%') > -1) {
      arr[0] = args.join(' ') + ' ' + arr[0];
    } else {
      arr.unshift.apply(arr, args);
    }
  },

  group: function group (name) {
    this._message(Color.colorize('l;yellow', name + ':'));
    this._groups.push(name);
    return this;
  },

  group_end: function group_end () {
    this._groups.pop()
    return this;
  },

  plain: function plain () {
    var args = this._to_array(arguments);
    return this._message(args);
  },

  log: function log () {
    var caller = Logger.get_caller();
    var args = this._to_array(arguments);
    this._prepend_strings(args, this._make_name(caller));
    return this._message(args);
  },

  info: function info () {
    var caller = Logger.get_caller();
    var args = this._to_array(arguments);
    this._prepend_strings(args, this._make_name(caller), Color.colorize('l;blue', 'INFO'));
    return this._message(args);
  },

  warn: function warn () {
    var caller = Logger.get_caller();
    var args = this._to_array(arguments);
    this._prepend_strings(args, this._make_name(caller), Color.colorize('l;yellow', 'WARNING'));
    return this._message(args);
  },

  error: function error () {
    var caller = Logger.get_caller();
    var args = this._to_array(arguments);
    this._prepend_strings(args, this._make_name(caller), Color.colorize('l;red', 'ERROR'));
    return this._message(args);
  },

  _message: function _message (args) {
    if (typeof args !== 'object' || args.length === undefined) {
      args = [args];
    }
    if (this._groups.length) {
      args.unshift(this._repeat(this._groups.length, this.indentation));
    }
    return console.log.apply(console, args);
  }
};
