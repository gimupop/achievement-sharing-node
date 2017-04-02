const axios = require('axios')

function loadMyArticle(myArticle) {
  axios.get('http://localhost:3000/api/article/mine')
    .then(function (response) {
      myArticle.$data.items = response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}

let myArticle = new Vue({
  el: '#my-article',
  data: {
    items: null
  }
})

loadMyArticle(myArticle)