/**
 * Created by yanagawa_keita on 2017/02/22.
 */

/*import express from 'express'
const app = express()
const passport = require('passport')

//認証
app.use(passport.initialize());

const session = require('express-session');
app.use(session({
  secret: '○○',
}));
app.use(passport.session());

passport.serializeUser(function(user, done) {
  console.log('sel')
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  console.log('des')
  done(null, user);
});

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(function(username, password, done){

  console.log(username)
  return done(null, username);
}))

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = passport*/
