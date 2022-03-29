<template>
  <q-layout view="hHh Lpr lff" class="shadow-2">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" />
        <q-toolbar-title style="font-family: BeaufortLoL; letter-spacing: 3px; word-spacing: 3px; font-weight: 600; color: #c9aa71">WIKI LEAGUE</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      :mini="!leftDrawerOpen"
      mini-to-overlay
      behavior="desktop"
      :width="250"
      :breakpoint="500"
      bordered
      content-class="bg-black"
    >
      <menu-lateral />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <modal-champion ref="modalChampion" />
    <modal-item ref="modalItem" />
  </q-layout>
</template>

<script>
import ModalChampion from '../modal/ModalChampion.vue'
import ModalItem from '../modal/ModalItem.vue'
import MenuLateral from '../components/MenuLateral'

export default {
  components: { ModalChampion, ModalItem, MenuLateral },

  data () {
    return {
      leftDrawerOpen: false
    }
  },

  mounted () {
    this.createRefsModals()
  },

  methods: {
    createRefsModals () {
      this.$root.modal = {}
      this.$root.modal.modalChampion = this.$refs.modalChampion
      this.$root.modal.modalItem = this.$refs.modalItem
    }
  }
}
</script>
