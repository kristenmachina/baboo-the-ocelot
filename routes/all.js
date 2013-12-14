
/*
 * GET home page.
 */

exports.about = function(req, res){
  res.render('about', { title: 'About' });
};

exports.characters = function(req, res){
  res.render('about', { title: 'Characters' });
};

exports.extras = function(req, res){
  res.render('about', { title: 'Extras' });
};

exports.archive = function(req, res){
  res.render('about', { title: 'Archive' });
};