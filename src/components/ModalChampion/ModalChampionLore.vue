<template>
  <q-card style="width: 800px; max-width: 80vw">
    <div class="fit column bg-dark">
      <q-img
        v-if="champion"
        :src="champion.splashs[0].img"
        spinner-color="black"
        img-class="modal-lore-img-champion"
      >
        <div class="fit row justify-center bg-transparent" v-if="$q.screen.gt.sm">
          <div class="column items-center">
            <div class="modal-lore-champion-title">{{ champion.title }}</div>
            <div class="modal-lore-champion-name">{{ champion.name }}</div>

            <div class="q-px-xl q-pt-lg" style="text-align: justify">
              <div class="q-px-xl">{{ champion.lore }}</div>
            </div>

            <div class="q-pa-md" style="text-align: center">
              <q-img :src="champion.tag.img" />
              <div class="q-py-xs">FUNÇÃO</div>
              <div style="color: #c9aa71">{{ champion.tag.label }}</div>
            </div>
          </div>
        </div>

        <div v-else class="fixed-center bg-transparent">
          <div class="modal-lore-champion-name">{{ champion.name }}</div>
          <div class="text-center modal-lore-champion-name" style="font-size: 14px">Lore</div>
        </div>
      </q-img>

      <div class="col bg-dark">
        <template v-for="(menu, i) in menuItems">
          <q-btn
            :key="i"
            rounded
            color="dark"
            class="modal-lore-between-divs"
            :label="$q.screen.gt.sm ? menu.label : ''"
            :icon="menu.icon"
            :style="menu.style"
            @click="menu.action()"
          >
            <q-tooltip v-if="$q.screen.lt.md" :offset="[3, 3]">{{ menu.label }}</q-tooltip>
          </q-btn>
        </template>

        <template v-if="$q.screen.lt.md">
          <div class="fit row justify-center q-mt-xl">
            <div class="column items-center">
              <div class="modal-lore-champion-title" style="font-size: 17px">{{ champion.title }}</div>

              <div class="q-px-xl q-pt-lg" style="text-align: justify">
                <div class="q-px-sm text-white">{{ champion.lore }}</div>
              </div>

              <div class="q-pa-md" style="text-align: center">
                <q-img :src="champion.tag.img" />
                <div class="q-py-xs text-white">FUNÇÃO</div>
                <div style="color: #c9aa71">{{ champion.tag.label }}</div>
              </div>
            </div>
          </div>
        </template>

        <div v-if="$q.screen.gt.sm" class="q-pa-md" />
      </div>
    </div>

    <q-btn class="absolute-top-right text-white q-ma-sm" dense round flat icon="close" v-close-popup />
  </q-card>
</template>

<script>
export default {
  inject: ['setView'],

  props: ['champion'],

  data () {
    return {}
  },

  computed: {
    menuItems () {
      return [
        {
          label: 'Início',
          icon: 'info',
          style: 'left: 20%',
          action: () => this.setView('ModalChampionHome')
        },
        {
          label: 'Skills',
          icon: 'mdi-script-text',
          style: 'left: 50%',
          action: () => this.setView('ModalChampionSkills')
        },
        {
          label: 'Skins',
          icon: 'style',
          style: 'left: 80%',
          action: () => this.setView('ModalChampionSkins')
        }
      ]
    }
  }
}
</script>

<style>
.modal-lore-img-champion {
  filter: brightness(15%)
}

.modal-lore-between-divs {
  display: block;
  position: absolute;
  transform: translateY(-50%) translateX(-50%)
}

.modal-lore-champion-name {
  font-size: 48px;
  font-family: BeaufortLoL;
  text-transform: uppercase;
  letter-spacing: 1px;
  word-spacing: 2px;
  font-weight: 800;
  color: white;
  font-style: italic;
}

.modal-lore-champion-title {
  font-size: 26px;
  font-family: BeaufortLoL;
  letter-spacing: 1px;
  text-transform: uppercase;
  word-spacing: 2px;
  font-weight: 600;
  color: white;
  font-style: italic;
}
</style>
