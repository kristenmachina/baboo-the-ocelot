
/**
 * Module dependencies.
 */

var express = require('express');
var favicon = require('serve-favicon');
var http = require('http');
var logger = require('morgan');
var path = require('path');

var comic = require('./routes/comic');
var routes = require('./routes/all');

var app = express();

app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', comic.newest);
app.get('/about', routes.about);
app.get('/characters', routes.characters);
app.get('/extras', routes.extras);
app.get('/archive', routes.archive);
app.get('/comic', comic.newest);
app.get(/^\/comic\/([0-9]+)-([0-9]{2,2})$/, comic.get);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if ('development' == app.get('env')) {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

