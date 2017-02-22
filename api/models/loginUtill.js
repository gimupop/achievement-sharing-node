/**
 * Created by yanagawa_keita on 2017/02/22.
 */
const db = require("../db.js")

//認証のロジックは後で直す。諸々考慮されてないので。
module.exports = {
  conn: null,
  checkUsername: function(username,password) {
    const query = 'select password from user_master where user_name ="'+username+'"'
    var result2 = null
    db.connect()
    db.getHoge(query, function (result) {
/*      console.log(result[0].password)
      console.log(password)
      if(result[0].password==password){
        console.log("hogehogehoge")
        result2 = true
      }else{
        result2 = false
      }*/
    })
    //console.log(result2)

    return true
  },
  checkPassword: function(password) {

  },

}