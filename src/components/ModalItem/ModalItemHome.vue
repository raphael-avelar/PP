<template>
  <q-card style="width: 500px; max-width: 80vw">
    <div class="fit column bg-dark">
      <div class="q-pa-xl text-white">{{ item.name }}</div>
    </div>

    <q-btn class="absolute-top-right text-white q-ma-sm" dense round flat icon="close" v-close-popup />
  </q-card>
</template>

<script>
export default {
  inject: ['setView'],

  props: ['item'],

  data () {
    return {}
  }
}
</script>

<style>
</style>
