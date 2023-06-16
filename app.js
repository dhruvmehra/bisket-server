var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
// var logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const authenticateUser = require("./middleware/authentication");
require("dotenv").config();

//mongodb
const connect = require("./config/db.config");

// Routers
var indexRouter = require("./routes/indexRoutes");
var userRouter = require("./routes/userRoutes");
var likesRouter = require("./routes/likesRoutes");
var productRouter = require("./routes/productRoutes");
// var curationRouter = require("./routes/curationRoutes");
// var feedRouter = require("./routes/feedRoutes");
// var searchRouter = require("./routes/searchRoutes");

var app = express();

// Call the connect function to establish the MongoDB connection
connect();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Middleware
app.use(bodyParser.json());
app.use(cors());
// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/products", authenticateUser, productRouter);
app.use("/likes", likesRouter);
// app.use("/curations", curationRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
