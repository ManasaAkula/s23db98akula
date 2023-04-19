var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shoesRouter = require('./routes/shoes');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var shoes = require("./models/shoes");
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shoes', shoesRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});

async function recreateDB() {
  // Delete everything
  await shoes.deleteMany();

  let instance1 = new
    shoes({ shoes_type: "Knee-high", shoes_name: 'Nike', shoes_cost: 6000 });
  instance1.save().then(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });

  let instance2 = new
    shoes({ shoes_type: "Earth shoe", shoes_name: 'Adidas', shoes_cost: 4000 });
  instance2.save().then(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });

  let instance3 = new
    shoes({ shoes_type: "Flip-flops", shoes_name: 'Reebok', shoes_cost: 5000 });
  instance3.save().then(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
}
let reseed = false;
if (reseed) { recreateDB(); }

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
