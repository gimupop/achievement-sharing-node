const axios = require('axios')

let registration = new Vue({
  el: '#input',
  data: {
    name: 'Vue.js',
    username: "",
    password: ""
  },
  // `methods` オブジェクトの下にメソッドを定義する
  methods: {
    registration: function () {
      var url = 'http://localhost:3000/registrationUser?username=' + this.username + '&password=' + this.password
      console.log(url)
      axios.get(url)
        .then(function () {
          console.log("post")
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  }
})
