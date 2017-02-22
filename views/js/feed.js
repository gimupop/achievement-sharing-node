const axios = require('axios')

function load() {
  axios.get('http://localhost:3000/select')
    .then(function (response) {
      new Vue({
        el: '#article',
        data: {
          items: response.data
        }
      })
    })
    .catch(function (error) {
      console.log(error);
    })
}

new Vue({
  el: '#input-form',
  data: {
    name: 'Vue.js',
    subject:"",
    contents:""
  },
  // `methods` オブジェクトの下にメソッドを定義する
  methods: {
    insert: function(){
      var url = 'http://localhost:3000/insert?subject='+ this.subject +'&contents=' + this.contents
      axios.get(url)
        .then(function () {
        })
/*        .catch(function (error) {
          console.log(error);
        })*/
    },
  }
})

load()






