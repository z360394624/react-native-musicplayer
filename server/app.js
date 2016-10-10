require('colors')
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();
var config = require('./config')
var _ = require('lodash')
var middleware = require('./middlewares')
var session = require('express-session')
var RedisStore = require('connect-redis')(session)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'))

//ejs模板上的全局变量
app.locals._layoutFile = 'layout.html'

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('cookie-parser')(config.session_secret));
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: config.session_secret,
  cookie: {
    maxAge: 60000
  }
}))
app.use(middleware.render)
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  // console.log(err)
  // res.render('error', {title: '查询失败', message: '可能是网络等原因'})
});


module.exports = app;
