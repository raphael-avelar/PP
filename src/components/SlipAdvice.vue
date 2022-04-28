<template>
  <div class="q-pa-md">
    <q-circular-progress v-if="loadingSlip" indeterminate size="25px" color="primary" />

    <span v-if="!loadingSlip">{{ slip }}</span>
  </div>
</template>

<script>
import adviceSlipService from '../services/adviceSlipService'
import myMemory from '../services/myMemory'

export default {
  data () {
    return {
      loadingSlip: true,
      slip: ''
    }
  },

  mounted () {
    this.loadSlip()
  },

  methods: {
    loadSlip () {
      this.loadingSlip = true

      adviceSlipService.getSlipAdvice().then(response => {
        this.slip = response.data.slip.advice
        this.loadingSlip = false
        // this.translated(response.data.slip.advice)
      }).catch(() => {
        this.slip = 'Não foi possível carregar o conselho!'
        this.loadingSlip = false
      })
    },

    translated (slipAdvice) {
      myMemory.translated(slipAdvice).then(response => {
        this.slip = response.data.responseData.translatedText
        this.loadingSlip = false
      }).catch(error => {
        if (error.response.status === 429) this.slip += this.slip + '(Não foi possível traduzir o conselho, pois a API de tradução atingiu o limite de requisições!)'
        else this.slip = 'Não foi possível traduzir o conselho!'
        this.loadingSlip = false
      })
    }
  }
}
</script>
