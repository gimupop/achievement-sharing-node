/**
 * 開発時検証用サーバ。
 */
import express from 'express'
const passport = require('passport')
const app = express()
const port = 3000
const loginUtill = require("./api/models/loginUtill.js")
global.projectRoot = __dirname


//ここは本当は外に出したいのだけど、上手くかけない
app.use(passport.initialize());
const session = require('express-session');
app.use(session({
  secret: '○○',
}));
app.use(passport.session());
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(function(username, password, done){
  if(loginUtill.checkUsername(username,password)) {
    console.log('login')
    return done(null, username)
  }else{
    return done(null, null)
  }
}))
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


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

