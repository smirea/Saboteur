exports.include = function include(file) {
  with(global) {
    var fs = require('fs');
    var content = fs.readFileSync(file);
    eval(content);
  };
};
