
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/all');
var comic = require('./routes/comic');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', comic.newest);
app.get('/about', routes.about);
app.get('/characters', routes.characters);
app.get('/extras', routes.extras);
app.get('/archive', routes.archive);
app.get('/comic', comic.newest);
app.get(/^\/comic\/([0-9]+)-([0-9]{2,2})$/, comic.get);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
