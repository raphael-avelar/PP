<template>
  <q-layout view="hHh Lpr lff" class="shadow-2">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" />
        <q-toolbar-title>Projeto P</q-toolbar-title>

        <q-input outlined v-model="nomeInvocador" dense dark filled style="width: 20rem" placeholder="Digite o nome de invocador...">
          <template v-slot:append>
            <q-btn icon="search" dense style="color: white" @click="pesquisarInvocador"/>
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      :breakpoint="500"
      overlay
      bordered
      persistent
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <template v-for="(menuItem, i) in menuList">
          <router-link :key="i" :to="menuItem.to" custom style="text-decoration: none">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <div class="row no-wrap items-center">
                <q-icon class="q-pr-md" :name="menuItem.icon" color="primary" size="sm"></q-icon>
                <span class="text-primary">{{ menuItem.label }}</span>
              </div>
            </q-item>
            <q-separator :key="'sep' + i" v-if="menuItem.separator" />
          </router-link>
        </template>
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
