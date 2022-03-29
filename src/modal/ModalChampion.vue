<template>
  <q-dialog ref="modal" persistent transition-show="scale" transition-hide="scale">
    <keep-alive>
      <component :is="view" ref="view" :champion="champion"/>
    </keep-alive>
  </q-dialog>
</template>

<script>
import ModalChampionHome from '../components/ModalChampion/ModalChampionHome'
import ModalChampionLore from '../components/ModalChampion/ModalChampionLore'
import ModalChampionSkills from '../components/ModalChampion/ModalChampionSkills'
import ModalChampionSkins from '../components/ModalChampion/ModalChampionSkins'

export default {
  components: {
    ModalChampionHome,
    ModalChampionLore,
    ModalChampionSkills,
    ModalChampionSkins
  },

  provide () {
    return {
      setView: this.setView,
      getView: this.getView
    }
  },

  data () {
    return {
      view: 'ModalChampionHome',
      champion: null
    }
  },

  methods: {
    show (champion) {
      this.$refs.modal.show()
      this.view = 'ModalChampionHome'
      this.champion = champion
    },

    setView (view) {
      this.$closeAllTooltips(this.$root)
      this.view = view

      return new Promise(resolve => {
        this.$nextTick(() => {
          resolve(this.$refs.view)
        })
      })
    },

    getView () {
      return this.view
    }
  }
}
</script>
