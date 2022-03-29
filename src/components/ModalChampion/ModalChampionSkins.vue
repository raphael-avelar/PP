<template>
  <q-card style="width: 800px; max-width: 80vw">
    <div class="fit column bg-dark">
      <q-img
        v-show="$q.screen.gt.sm"
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

          <template v-slot:after />
        </q-splitter>
      </q-img>

      <q-carousel
        v-model="slide"
        class="modal-skins-carousel"
        swipeable
        animated
        arrows
        thumbnails
        infinite
        v-show="$q.screen.lt.md"
      >
        <template v-for="(slide, i) in champion.splashs">
          <q-carousel-slide :key="i" :name="slide.name" :img-src="slide.img" />
        </template>
      </q-carousel>

      <div class="col bg-dark">
        <template v-for="(menu, i) in menuItems">
          <q-btn
            :key="i"
            rounded
            color="dark"
            class="modal-skins-between-divs"
            :label="$q.screen.gt.sm ? menu.label : ''"
            :icon="menu.icon"
            :style="menu.style"
            @click="menu.action()"
          >
            <q-tooltip v-if="$q.screen.lt.md" :offset="[3, 3]">{{ menu.label }}</q-tooltip>
          </q-btn>
        </template>

        <div class="q-pa-md" />
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
    return {
      splashSelected: this.champion.splashs[0],
      slide: this.champion.splashs[0].name,
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
          label: 'Lore',
          icon: 'auto_stories',
          style: 'left: 80%',
          action: () => this.setView('ModalChampionLore')
        }
      ]
    }
  },

  watch: {
    splashSelected () {
      this.slide = this.splashSelected.name
    },

    slide () {
      this.splashSelected = this.champion.splashs.find(splash => splash.name === this.slide)
    }
  }
}
</script>

<style>
.modal-skins-hover:hover {
  opacity: 1 !important;
}

.modal-skins-between-divs {
  display: block;
  position: absolute;
  transform: translateY(-50%) translateX(-50%);
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

.modal-skins-carousel .q-carousel__control {
  margin-bottom: 7px;
}

.modal-skins-carousel .q-carousel__navigation--bottom::-webkit-scrollbar {
  height: 6px;
  width: 6px;
  background: transparent;
  overflow: visible;
}

.modal-skins-carousel .q-carousel__navigation--bottom::-webkit-scrollbar-thumb {
  background-color: #5a5a5a;
  border-radius: 10px;
}

.modal-skins-carousel .q-carousel__navigation--bottom::-webkit-scrollbar-track {
  margin-top: 48px;
}
</style>
