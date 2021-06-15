<template>
  <div class="fit row items-stretch content-stretch bg-dark">
    <q-page class="fit shadow-24" style="margin-left: 18rem; margin-right: 18rem;">
      <div class="row no-wrap justify-between q-py-md" style="margin-left: 6.75rem; margin-right: 6.75rem;">
        <q-input rounded filled outlined v-model="searchChampion" dense dark class="col-6" placeholder="Digite o nome do Campeão...">
          <template v-slot:append>
            <q-icon name="search" dense style="color: white"/>
          </template>
        </q-input>

        <div class="row no-wrap">
          <template v-for="(tag, i) in tags">
            <q-img :key="i" :src="require('../statics/league-of-legends/tags/' + tag + '.png')" @click="activeTagFilter(tag)" class="q-ml-sm cursor-pointer tag-image-style-hover" :style="tagFilter === tag ? 'height: 38px; width: 38px;' : 'height: 38px; width: 38px; opacity: 0.4'">
              <q-tooltip>{{ tag }}</q-tooltip>
            </q-img>
          </template>
        </div>
      </div>

      <q-scroll-area style="height: calc(100vh - 122px)">
        <div class="row justify-center">
          <template v-for="(champion, i) in championsFilter">
            <div :key="i" class="q-py-md" style="height: 6.25rem; width: 8.75rem">
              <div class="row justify-center">
                <q-img :src="champion.icon" spinner-color="black" class="cursor-pointer" style="height: 48px; max-width: 48px;" />
              </div>
              <span class="row justify-center q-pt-xs" style="font-family: BeaufortLoL; text-transform: uppercase; font-weight: 700; color: #c9aa71;">{{ champion.name }}</span>
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
      searchChampion: null,
      tagFilter: null,
      tags: ['Tank', 'Fighter', 'Mage', 'Assassin', 'Marksman', 'Support']
      // { tag:'Tank', icon: 'Tank.png' },
      // { tag:'Fighter', icon: 'Fighter.png' },
      // { tag:'Mage', icon: 'Mage.png' },
      // { tag:'Assassin', icon: 'Assassin.png' },
      // { tag:'Marksman', icon: 'Marksman.png' },
      // { tag:'Support', icon: 'Support.png' }
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
        champion.icon = require('../statics/league-of-legends/icons/champion/' + champion.image.full)
      })
    },

    activeTagFilter (tag) {
      this.tagFilter = this.tagFilter === tag ? null : tag
    }
  },

  watch: {
    searchChampion () {
      if (this.searchChampion) {
        this.championsFilter = Object.values(this.champions).filter(champion => champion.name.toLowerCase().includes(this.searchChampion.toLowerCase()))
      } else {
        this.championsFilter = this.champions
      }
    },

    tagFilter () {
      if (this.tagFilter) {
        this.championsFilter = Object.values(this.champions).filter(champion => champion.tags.find(tag => tag === this.tagFilter))
      } else {
        this.championsFilter = this.champions
      }
    }
  }
}
</script>

<style>
.tag-image-style-hover:hover {
  opacity: 1 !important
}
</style>
