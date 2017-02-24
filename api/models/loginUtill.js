/*
/!**
 * Created by yanagawa_keita on 2017/02/22.
 *!/
const db = require("../db.js")

//認証のロジックは後で直す。諸々考慮されてないので。
module.exports = {
  conn: null,
  checkUsername: function (username, password) {
    const query = 'select password from user_master where user_name ="' + username + '"'
    db.connect()
    db.query(query, function (result) {
      if (result[0].password == password) {
        console.log(result2)
        return result2
      } else {
        console.log(result2)
        return result2
      }
    })
  },
  checkPassword: function (password) {

  },

}*/
