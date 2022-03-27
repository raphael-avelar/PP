<template>
  <div class="fit row items-stretch content-stretch bg-dark">
    <q-page class="fit shadow-24" :style="getStyle()">
      <div class="row justify-center q-py-lg q-px-xl q-gutter-lg">
        <q-input rounded filled outlined v-model="searchChampion" dense dark class="col-6" placeholder="Procurar Campeão...">
          <template v-slot:append>
            <q-icon name="search" dense style="color: white"/>
          </template>
        </q-input>

        <div class="row no-wrap">
          <template v-for="(tag, i) in tags">
            <q-img
              :key="i"
              :src="require('../statics/league-of-legends/tags/' + tag.value + '.png')"
              @click="activeTagFilter(tag.value)"
              class="q-ml-sm cursor-pointer tag-image-style-hover"
              :style="tagFilter === tag.value ? 'height: 38px; width: 38px;' : 'height: 38px; width: 38px; opacity: 0.4'"
            >
              <q-tooltip>{{ tag.label }}</q-tooltip>
            </q-img>
          </template>
        </div>
      </div>

      <q-scroll-area style="height: calc(100vh - 138px)">
        <div class="row justify-center">
          <template v-for="(champion, i) in championsFilter">
            <div :key="i" class="q-py-md" style="height: 6.25rem; width: 8.75rem">
              <div class="row justify-center">
                <q-img
                  :src="champion.icon"
                  spinner-color="black"
                  @click="$root.modal.modalChampion.show(champion)"
                  class="cursor-pointer"
                  style="height: 48px; max-width: 48px;"
                />
              </div>

              <span class="row justify-center q-pt-xs champion-name">{{ champion.name }}</span>
            </div>
          </template>
        </div>
      </q-scroll-area>
    </q-page>
  </div>
</template>

<script>
import AllChampions from '../statics/league-of-legends/championFull.json'

export default {
  data () {
    return {
      champions: [],
      championsFilter: [],
      searchChampion: null,
      tagFilter: null,
      tags: [
        { value: 'Tank', label: 'Tank' },
        { value: 'Fighter', label: 'Lutador' },
        { value: 'Mage', label: 'Mago' },
        { value: 'Assassin', label: 'Assassino' },
        { value: 'Marksman', label: 'Atirador' },
        { value: 'Support', label: 'Suporte' }
      ]
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
        champion.splashs = this.getSplashs(champion)
        champion.tag = this.getTagChampion(champion)
      })
    },

    getSplashs (champion) {
      if (champion.id === 'Fiddlesticks') champion.id = 'FiddleSticks'

      return champion.skins.map(skin => {
        return {
          img: require('../statics/league-of-legends/img/champion/centered/' + champion.id + '_' + skin.num + '.jpg'),
          ...skin
        }
      })
    },

    getTagChampion (champion) {
      return {
        label: this.tags.find(tag => tag.value === champion.tags[0]).label,
        img: require('../statics/league-of-legends/tags/' + champion.tags[0] + '.png')
      }
    },

    activeTagFilter (tag) {
      this.tagFilter = this.tagFilter === tag ? null : tag
    },

    getStyle () {
      if (this.$q.screen.sm) return 'margin-left: 3rem; margin-right: 3rem'
      if (this.$q.screen.gt.sm) return 'margin-left: 14rem; margin-right: 14rem'

      return ''
    }
  },

  watch: {
    searchChampion () {
      if (this.searchChampion) {
        if (this.tagFilter) {
          const championsFilter = Object.values(this.champions).filter(champion => champion.name.toLowerCase().includes(this.searchChampion.toLowerCase()))
          this.championsFilter = Object.values(championsFilter).filter(champion => champion.tags.find(tag => tag === this.tagFilter))
          return
        }

        this.championsFilter = Object.values(this.champions).filter(champion => champion.name.toLowerCase().includes(this.searchChampion.toLowerCase()))
      } else {
        this.championsFilter = this.champions
      }
    },

    tagFilter () {
      if (this.tagFilter) {
        const championsFilter = Object.values(this.champions).filter(champion => champion.name.toLowerCase().includes(this.searchChampion ? this.searchChampion.toLowerCase() : ''))
        this.championsFilter = Object.values(championsFilter).filter(champion => champion.tags.find(tag => tag === this.tagFilter))
      } else {
        this.championsFilter = Object.values(this.champions).filter(champion => champion.name.toLowerCase().includes(this.searchChampion ? this.searchChampion.toLowerCase() : ''))
      }
    }
  }
}
</script>

<style>
.tag-image-style-hover:hover {
  opacity: 1 !important
}

.champion-name {
  font-family: BeaufortLoL;
  text-transform: uppercase;
  font-weight: 700;
  color: #c9aa71;
}
</style>
