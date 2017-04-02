const axios = require('axios')

function load(article) {
  axios.get('http://localhost:3000/api/article')
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
      var url = 'http://localhost:3000/api/article?subject=' + this.subject + '&contents=' + this.contents
      axios.post(url,{})
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






