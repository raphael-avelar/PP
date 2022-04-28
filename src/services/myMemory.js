import axios from 'axios'

export default {
  translated (message) {
    const url = `https://api.mymemory.translated.net/get?q=${message}&langpair=en|pt-br`

    return axios({
      method: 'get',
      url: url
    })
  }
}
