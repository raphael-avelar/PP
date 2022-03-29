<template>
  <q-scroll-area class="fit">
    <q-list padding>
      <template v-for="(menuItem, i) in menuList">
        <router-link :key="i" :to="menuItem.to" custom style="text-decoration: none">
          <q-item clickable v-ripple :style="$route.fullPath === menuItem.to ? 'background-color: #1d1d1d' : ''">
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
</template>

<script>
export default {
  props: ['leftDrawerOpen'],

  data () {
    return {
      menuList: [
        {
          label: 'Home',
          to: '/',
          icon: 'mdi-home',
          separator: true
        },
        {
          label: 'Itens',
          to: '/items',
          icon: 'security',
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
  }
}
</script>
