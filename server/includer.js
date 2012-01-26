exports.include = function (file_) {
  with (global) {
    var fs = require('fs');
    eval(fs.readFileSync(file_) + '');
  };
}; 