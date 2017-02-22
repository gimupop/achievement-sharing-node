/**
 * Created by yanagawa_keita on 2017/02/15.
 */
import express from 'express'
const router = express.Router();
const db = require("./db.js")
const app = express()

//const passport = require('./models/passport')
//var bodyPaser = require('./models/passport')
const passport = require('passport')

router.post('/login',
  passport.authenticate('local'),
  function(req, res){
  console.log('login')
    res.redirect('/feed')
  }
)


router.get('/login', function(req, res){
  res.sendFile(projectRoot + '/views/html/login.html');
});

router.get('/feed', function(req, res){
  res.sendFile(projectRoot + '/views/html/feed.html');
});


//apiリクエストの返送用設定
router.get('/select', (req, res) => {
  console.log(req.query.hoge)
  const query = 'select article_id,subject,contents from article'
  db.connect()
  db.getHoge(query, function (result) {
    res.send(result)
  })
})

router.get('/insert', (req, res) => {
  const subject = duble(req.query.subject)
  const contents = duble(req.query.contents)
  db.connect()
  const query ='insert into article (subject,contents,user_id) values ('+ subject +','+ contents +',1)'
  db.getHoge(query, function (result) {
    res.send(result)
  })
})

function duble(target){
  return '"'+target+'"'
}






module.exports = router;