import axios from 'axios'

export default {
  getSlipAdvice () {
    const url = 'https://api.adviceslip.com/advice'

    return axios({
      method: 'get',
      url: url
    })
  }
}
