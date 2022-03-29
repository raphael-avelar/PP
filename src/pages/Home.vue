<template>
  <q-page class="flex flex-center column bg-home">
    <div class="q-py-lg title">- WIKI LEAGUE -</div>

    <div class="row justify-center q-gutter-lg q-px-md">
      <q-btn
        push
        rounded
        color="dark"
        label="Itens"
        icon="security"
        @click="$router.push({ name: 'Items' })"
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

  methods: {}
}
</script>

<style>
.bg-home {
  background: linear-gradient(
  rgba(0, 0, 0, 0.8),
  rgba(0, 0, 0, 0.8)
  ),
  url('../statics/homePageBackground.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.title {
  font-size: 32px;
  font-family: BeaufortLoL;
  letter-spacing: 3px;
  word-spacing: 3px;
  font-weight: 600;
  color: #c9aa71
}
</style>
