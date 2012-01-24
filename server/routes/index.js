
/*
 * GET home page.
 */

exports.index = function(req, res){
  // res.render('index.html', { title: 'Express' })
  res.sendfile(__dirname + '../views/index.html');
};
