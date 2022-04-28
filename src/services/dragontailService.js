import axios from 'axios'

export default {
  getChampions () {
    const url = 'http://ddragon.leagueoflegends.com/cdn/11.12.1/data/pt_BR/champion.json'

    return axios({
      method: 'get',
      url: url
    })
  }
}
