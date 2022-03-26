<template>
  <q-page class="flex flex-center column bg-home">
    <div class="q-py-lg" :style="getStyleLabelHome()">- WIKI LEAGUE -</div>

    <div class="row justify-center q-gutter-lg q-px-md">
      <q-btn
        push
        rounded
        color="dark"
        label="Histórico de Partidas"
        icon="mdi-script-text"
        @click="$router.push({ name: 'MatchHistory' })"
      />

      <q-btn
        push
        rounded
        color="dark"
        label="Campeões"
        icon="mdi-sword-cross"
        @click="$router.push({ name: 'Champions' })"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {}
  },

  methods: {
    getStyleLabelHome () {
      return `font-size: 32px;
      font-family: BeaufortLoL;
      letter-spacing: 3px;
      word-spacing: 3px;
      font-weight: 600;
      color: #c9aa71`
    }
  }
}
</script>

<style>
.bg-home {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../statics/homePageBackground.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
