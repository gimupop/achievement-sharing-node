/**
 * 開発時検証用サーバ。
 */
import express from 'express'
let db = require("./db.js")

const app = express()
const port = 3000

//accessログ排出用（標準出力に出力）
const morgan = require('morgan');
app.use(morgan('combined'));

//検証用のhtmlの配備
app.use(express.static('public'))
app.use(express.static('view'))


//apiリクエストの返送用設定
app.get('/select', (req, res) => {
  console.log(req.query.hoge)
  const query = 'select * from article'
  db.connect()
  db.getHoge(query, function (result) {
    res.send(result)
  })
})

app.get('/insert', (req, res) => {
  const subject = duble(req.query.subject)
  const contents = duble(req.query.contents)
  db.connect()
  const query ='insert into article (subject,contents,user_id) values ('+ subject +','+ contents +',1)'
  db.getHoge(query, function (result) {
    res.send(result)
  })
})


app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})

function duble(target){
  return '"'+target+'"'
}