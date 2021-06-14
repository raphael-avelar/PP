<template>
  <div class="fit row items-stretch content-stretch">
    <q-page class="fit" style="margin-left: 18rem; margin-right: 18rem;">
      <div class="row justify-center">
        <template v-for="(champion, i) in champions" class="">
          <div :key="i" class="q-py-md" style="height: 6.25rem; width: 8.75rem">
            <div class="row justify-center">
              <q-img src="https://placeimg.com/500/300/nature" spinner-color="black" style="height: 48px; max-width: 48px" />
            </div>
            <span class="row justify-center">{{ champion.name }}</span>
          </div>
        </template>
      </div>
    </q-page>
  </div>
</template>

<script>
import dragontailService from '../services/dragontailService'

export default {
  data () {
    return {
      champions: []
    }
  },

  mounted () {
    this.loadChampions()
  },

  methods: {
    loadChampions () {
      this.loading = true

      dragontailService.getChampions().then(response => {
        this.champions = response.data.data
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>
