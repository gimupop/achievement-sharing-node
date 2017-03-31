import express from 'express'
const router = express.Router();
const db = require("./db.js")

const passport = require('passport')

router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.redirect('/login')
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err)
      }

      const userName = addDubleQuote(req.session.passport.user)
      db.connect()
      const query = 'select user_id from user_master where user_name =' + userName
      db.doQuery(query, function (result) {
        req.session.passport.userId = result[0].user_id
        return res.redirect('/feed');
      })

    })
  })(req, res, next)
})

router.get('/login', function (req, res) {
  res.sendFile(projectRoot + '/views/html/login.html')
});

router.get('/feed', isAuthenticated, function (req, res) {
  res.sendFile(projectRoot + '/views/html/feed.html')
});

router.get('/registration', function (req, res) {
  res.sendFile(projectRoot + '/views/html/registration.html')
});

router.get('/mypage',isAuthenticated, function (req, res) {
  res.sendFile(projectRoot + '/views/html/mypage.html')
});

//apiリクエストの返送用設定
router.get('/select', (req, res) => {
  console.log(req.query.hoge)
  const query = 'select a.article_id,a.subject,a.contents,u.user_name from article a inner join user_master u on a.user_id = u.user_id'
  db.connect()
  db.doQuery(query, function (result) {
    res.send(result)
  })
})

router.get('/insert', (req, res) => {
  const subject = addDubleQuote(req.query.subject)
  const contents = addDubleQuote(req.query.contents)
  console.log("userId" + req.session.passport.userId)
  const userId = req.session.passport.userId
  db.connect()
  const query = 'insert into article (subject,contents,user_id) values (' + subject + ',' + contents + ',' + userId + ')'
  db.doQuery(query, function (result) {
    res.send(result)
  })
})

router.get('/registrationUser', (req, res) => {
  const userName = addDubleQuote(req.query.username)
  const password = addDubleQuote(req.query.password)
  const query = 'insert into user_master (user_name,password) values ('+userName + ','+ password+')'
  console.log(query)
  db.connect()
  db.doQuery(query, function (result) {
    res.send(result)
  })
})


router.get('/selectMyArticle', (req, res) => {
  console.log(req.query.hoge)
  const userId = req.session.passport.userId
  const query = 'select a.article_id,a.subject,a.contents,u.user_name from article a inner join user_master u on a.user_id = u.user_id where a.user_id ='+userId
  db.connect()
  db.doQuery(query, function (result) {
    res.send(result)
  })
})


router.get('/gethoge', function (req, res) {
  console.log(req.session)
  res.send(req.session)
})

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/login')
})

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  else {
    res.redirect('/login')
  }
}


function addDubleQuote(target) {
  return '"' + target + '"'
}


module.exports = router