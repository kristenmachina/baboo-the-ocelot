var express = require('express');

var about_routes = express.Router();
exports.about = about_routes;

about_routes.use('/', function(req, res){
  res.render('about', { title: 'About' });
});

about_routes.use('/characters', function(req, res) {
  res.render('about/characters', { title: 'Characters' });
});

exports.characters = function(req, res){
  res.render('about', { title: 'Characters' });
};

exports.extras = function(req, res){
  res.render('about', { title: 'Extras' });
};

exports.archive = function(req, res){
  res.render('about', { title: 'Archive' });
};
