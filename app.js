/**
 * 開発時検証用サーバ。
 */
import express from 'express'
const passport = require('passport')
const app = express()
const port = 3000
const loginUtill = require("./api/models/loginUtill.js")
const db = require("./api/db.js")
global.projectRoot = __dirname


//ここは本当は外に出したいのだけど、上手くかけない

const session = require('express-session');
app.use(session({
  secret: '○○',
  saveUninitialized: true,
  resave: true,
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(function (username, password, done) {
  const query = 'select password from user_master where user_name ="' + username + '"'
  db.connect()
  db.doQuery(query, function (result) {
    if (result[0].password == password) {
      return done(null, username)
    } else {
      return done(null, null)
    }
  })
}))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


//accessログ排出用（標準出力に出力）
const morgan = require('morgan');
app.use(morgan('combined'));

//検証用のhtmlの配備
app.use(express.static('public'))


app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})


var router = require('./api/router')
app.use('/', router)

module.exports = app

