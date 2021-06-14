<template>
  <div class="fit row items-stretch content-stretch bg-dark">
    <q-page class="fit shadow-24" style="margin-left: 18rem; margin-right: 18rem;">
      <div class="row justify-center q-pa-md">
        <q-input rounded outlined v-model="searchChampion" dense dark style="width: 35rem" placeholder="Digite o nome do Campeão...">
          <template v-slot:append>
            <q-icon name="search" dense style="color: white"/>
          </template>
        </q-input>
      </div>

      <q-scroll-area style="height: calc(100vh - 122px)">
        <div class="row justify-center">
          <template v-for="(champion, i) in championsFilter">
            <div :key="i" class="q-py-md" style="height: 6.25rem; width: 8.75rem">
              <div class="row justify-center">
                <q-img :src="champion.icon" spinner-color="black" class="cursor-pointer" style="height: 48px; max-width: 48px;" />
              </div>
              <span class="row justify-center q-pt-xs text-white text-italic text-subtitle2 text-weight-bold">{{ champion.name }}</span>
            </div>
          </template>
        </div>
      </q-scroll-area>
    </q-page>
  </div>
</template>

<script>
import AllChampions from '../statics/league-of-legends/all-champions.json'

export default {
  data () {
    return {
      champions: [],
      championsFilter: [],
      searchChampion: null
    }
  },

  mounted () {
    this.loadChampions()
  },

  methods: {
    loadChampions () {
      this.champions = AllChampions.data
      this.setAllIcons()

      this.championsFilter = this.champions
    },

    setAllIcons () {
      Object.values(this.champions).forEach(champion => {
        champion.icon = 'img/' + champion.image.full
      })
    }
  },

  watch: {
    searchChampion () {
      if (this.searchChampion) {
        this.championsFilter = Object.values(this.champions).filter(champion => champion.name.toLowerCase().includes(this.searchChampion.toLowerCase()))
      } else {
        this.championsFilter = this.champions
      }
    }
  }
}
</script>
