let mysql = require('mysql')
module.exports = {
  conn: null,
  connect: function() {
    this.conn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'core_master_db',
      port: 23306
    })
    this.conn.connect(function (err) {
      if (err) {
        console.log(err)
      } else {
        // MySQLへ接続成功
      } })
  },
  doQuery: function (query, cb) {
    //console.log(this.conn)
    this.conn.query(query, function(error, results){
      if (error) throw error
      //console.log(result)
      cb(results)
    })
  }
}
