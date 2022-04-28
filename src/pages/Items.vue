<template>
  <div class="fit row items-stretch content-stretch bg-dark">
    <q-page class="fit shadow-24" :style="getStylePage()">
      <div class="row justify-center q-py-lg q-px-xl q-gutter-lg">
        <q-input rounded filled outlined v-model="searchItems" dense dark :class="$q.screen.xs ? 'col-12' : 'col-9'" placeholder="Procurar Item...">
          <template v-slot:append>
            <q-icon name="search" dense style="color: white"/>
          </template>
        </q-input>
      </div>

      <q-scroll-area style="height: calc(100vh - 138px)">
        <div class="row justify-center">
          <template v-for="(item, i) in itemsFilter">
            <div
              :key="i"
              class="q-py-md q-px-xs q-mb-xl"
              :style="`height: 6.25rem; width: ${$q.screen.xs ? '7.5rem' : '8.75rem'}`"
            >
              <div class="row justify-center items-center q-pb-xs" style="color: #ffbf00">
                <q-icon name="attach_money" size="xs" />
                <span>{{ item.gold.total }}</span>
              </div>

              <div class="row justify-center">
                <q-img
                  :src="item.icon"
                  spinner-color="black"
                  style="height: 44px; max-width: 44px; border: solid 1px #c9aa71"
                />
              </div>

              <span class="row justify-center items-center q-pt-xs items-name">{{ item.name }}</span>
            </div>
          </template>
        </div>
      </q-scroll-area>
    </q-page>
  </div>
</template>

<script>
import AllItems from '../statics/league-of-legends/item.json'

export default {
  data () {
    return {
      items: [],
      itemsFilter: [],
      searchItems: null
    }
  },

  mounted () {
    this.loadItems()
  },

  methods: {
    loadItems () {
      this.items = AllItems.data
      this.setAllIcons()

      this.itemsFilter = this.items
    },

    setAllIcons () {
      Object.values(this.items).forEach(items => {
        items.icon = require('../statics/league-of-legends/icons/item/' + items.image.full)
      })
    },

    getStylePage () {
      if (this.$q.screen.sm) return 'margin-left: 3rem; margin-right: 3rem'
      if (this.$q.screen.gt.sm) return 'margin-left: 14rem; margin-right: 14rem'

      return ''
    }
  },

  watch: {
    searchItems () {
      this.itemsFilter = Object.values(this.items).filter(item => item.name.toLowerCase().includes(this.searchItems.toLowerCase()))
    }
  }
}
</script>

<style>

.items-name {
  font-size: 13px;
  text-align: center;
  font-weight: 500;
  color: #c9aa71;
}
</style>
