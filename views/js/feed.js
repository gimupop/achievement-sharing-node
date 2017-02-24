const axios = require('axios')

function load(article) {
  axios.get('http://localhost:3000/select')

    .then(function (response) {
      console.log("load")
      article.$data.items = response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}


let article = new Vue({
  el: '#article',
  data: {
    items: null
  }
})


function getUserName(article) {
  axios.get('http://localhost:3000/ge')

    .then(function (response) {
      console.log("load")
      article.$data.items = response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}


let postArticle = new Vue({
  el: '#input-form',
  data: {
    name: 'Vue.js',
    subject: "",
    contents: ""
  },
  // `methods` オブジェクトの下にメソッドを定義する
  methods: {
    insert: function () {
      var url = 'http://localhost:3000/insert?subject=' + this.subject + '&contents=' + this.contents
      axios.get(url)
        .then(function () {
          console.log("post")
          load(article)

        })
        .catch(function (error) {
          console.log(error);
        })
    },
  }
})

load(article)






