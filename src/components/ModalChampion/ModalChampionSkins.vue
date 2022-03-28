<template>
  <q-card style="width: 800px; max-width: 80vw">
    <q-img
      v-if="splashSelected"
      :src="splashSelected.img"
      spinner-color="black"
    >
      <q-splitter v-model="splitterModel" unit="px" disable separator-class="bg-transparent" style="height: 100%; padding: 7px">
        <template v-slot:before>
          <div class="q-pa-md" style="height: 90%">
            <div class="text-h4 q-mb-md modal-skins-label-skins">SKINS</div>

            <q-scroll-area :thumb-style="thumbStyleSkins" style="height: 100%">
              <template v-for="(splash, i) in champion.splashs">
                <div
                  :key="i"
                  class="row no-wrap items-center q-my-lg cursor-pointer modal-skins-hover"
                  :style="splashSelected.name === splash.name ? '' : 'opacity: 0.3'"
                  @click="splashSelected = splash"
                >
                  <q-img
                    :src="splash.img"
                    spinner-color="black"
                    img-class="modal-img-champion"
                    class="col-4"
                    width="75px"
                    height="75px"
                  />

                  <div class="modal-skins-label-splash q-pl-md">
                    {{ splash.name !== 'default' ? splash.name : champion.name }}
                  </div>
                </div>
              </template>
            </q-scroll-area>
          </div>
        </template>

        <template v-slot:after>
        </template>
      </q-splitter>
    </q-img>

    <q-btn class="absolute-top-right text-white q-ma-sm" dense round flat icon="close" v-close-popup />

    <q-btn-dropdown
      color="grey-9"
      class="absolute-bottom-right q-ma-md"
      rounded
      push
      menu-anchor="top end"
      menu-self="bottom right"
      :menu-offset="[3, 3]"
    >
      <q-list>
        <template v-for="(menu, i) in menuItems">
          <q-item :key="i" clickable v-close-popup @click="menu.action()" class="bg-dark">
            <q-item-section>
              <q-icon :name="menu.icon" size="sm" class="text-white"/>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-white">{{ menu.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-btn-dropdown>
  </q-card>
</template>

<script>

export default {
  inject: ['setView'],

  props: ['champion'],

  data () {
    return {
      splashSelected: null,
      splitterModel: 320,
      thumbStyleSkins: {
        right: '-16px',
        borderRadius: '5px',
        width: '7px',
        opacity: 0.5
      }
    }
  },

  mounted () {
    this.splashSelected = this.champion.splashs[0]
  },

  computed: {
    menuItems () {
      return [
        {
          label: 'Início',
          icon: 'info',
          action: () => this.setView('ModalChampionHome')
        },
        {
          label: 'Skills',
          icon: 'mdi-script-text',
          action: () => this.setView('ModalChampionSkills')
        },
        {
          label: 'Lore',
          icon: 'auto_stories',
          action: () => this.setView('ModalChampionLore')
        }
      ]
    }
  }
}
</script>

<style>
.modal-skins-hover:hover {
  opacity: 1 !important;
}

.modal-skins-label-skins {
  font-family: BeaufortLoL;
  font-weight: 800;
  letter-spacing: 0.05em;
  font-style: italic;
}

.modal-skins-label-splash {
  font-family: Arial;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
