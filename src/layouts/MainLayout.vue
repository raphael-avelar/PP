<template>
  <q-layout view="hHh Lpr lff" class="shadow-2">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" />
        <q-toolbar-title></q-toolbar-title>

        <q-input outlined v-model="nomeInvocador" dense dark filled style="width: 20rem" placeholder="Digite o nome de invocador...">
          <template v-slot:append>
            <q-btn icon="search" dense style="color: white" @click="pesquisarInvocador"/>
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      :mini="!leftDrawerOpen"
      mini-to-overlay
      :width="250"
      :breakpoint="500"
      bordered
      persistent
      content-class="bg-black"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <template v-for="(menuItem, i) in menuList">
            <router-link :key="i" :to="menuItem.to" custom style="text-decoration: none">
              <q-item clickable v-ripple>
                <q-tooltip v-if="!leftDrawerOpen" anchor="center right" self="center left" :offset="[15, 15]">{{ menuItem.label }}</q-tooltip>

                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" color="white" size="sm"></q-icon>
                </q-item-section>

                <q-item-section>
                  <span class="text-white text-weight-bold">{{ menuItem.label }}</span>
                </q-item-section>
              </q-item>
              <!-- <q-separator :key="'sep' + i" v-if="menuItem.separator" color="white" /> -->
            </router-link>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>

export default {
  data () {
    return {
      leftDrawerOpen: true,
      nomeInvocador: null,
      menuList: [
        {
          label: 'Home',
          to: '/home',
          icon: 'mdi-home',
          separator: true
        },
        {
          label: 'Histórico de Partidas',
          to: '/historicoPartidas',
          icon: 'mdi-script-text',
          separator: true
        },
        {
          label: 'Campeões',
          to: '/champions',
          icon: 'mdi-sword-cross',
          separator: true
        }
      ]
    }
  },

  methods: {
    pesquisarInvocador () {
      const path = `/historicoPartidas/${this.nomeInvocador}`

      if (this.nomeInvocador && this.$route.path !== path) {
        this.$router.push({ name: 'HistoricoPartidas', params: { nomeInvocador: this.nomeInvocador } })
      }
    }
  }
}
</script>
