<template>
  <q-page class="flex flex-center column">
    <div class="q-pa-md">
      <q-circular-progress v-if="loadingConselho" indeterminate size="25px" color="primary" />

      <span v-if="!loadingConselho">Exibindo mensagem: {{ conselho }}</span>
    </div>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import adviceSlipService from '../services/adviceSlipService'
import myMemory from '../services/myMemory'

export default {
  name: 'PageIndex',

  data () {
    return {
      loadingConselho: true,
      conselho: ''
    }
  },

  mounted () {
    this.loadConselho()
  },

  methods: {
    loadConselho () {
      this.loadingConselho = true

      adviceSlipService.getSlipAdvice().then(response => {
        this.conselho = response.data.slip.advice
        this.translated(response.data.slip.advice)
      }).catch(() => {
        this.conselho = 'Não foi possível carregar o conselho!'
        this.loadingConselho = false
      })
    },

    translated (slipAdvice) {
      myMemory.translated(slipAdvice).then(response => {
        this.conselho = response.data.responseData.translatedText
        this.loadingConselho = false
      }).catch(error => {
        if (error.response.status === 429) this.conselho += this.conselho + '(Não foi possível traduzir o conselho, pois a API de tradução atingiu o limite de requisições!)'
        else this.conselho = 'Não foi possível traduzir o conselho!'
        this.loadingConselho = false
      })
    }
  }
}
</script>
