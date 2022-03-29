<template>
  <q-dialog ref="modal" persistent transition-show="scale" transition-hide="scale">
    <keep-alive>
      <component :is="view" ref="view" :item="item"/>
    </keep-alive>
  </q-dialog>
</template>

<script>
import ModalItemHome from '../components/ModalItem/ModalItemHome'

export default {
  components: {
    ModalItemHome
  },

  provide () {
    return {
      setView: this.setView,
      getView: this.getView
    }
  },

  data () {
    return {
      view: 'ModalItemHome',
      item: null
    }
  },

  methods: {
    show (item) {
      this.$refs.modal.show()
      this.view = 'ModalItemHome'
      this.item = item
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
