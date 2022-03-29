<template>
  <q-card style="width: 800px; max-width: 80vw">
    <div class="fit column bg-dark">
      <q-img
        v-if="champion"
        :src="champion.splashs[0].img"
        spinner-color="black"
        img-class="modal-skills-img-champion"
      >
        <template v-if="$q.screen.gt.sm">
          <div class="fixed-center bg-transparent">
            <div class="modal-skills-type">{{ getLabelTypeSkill() }}</div>
            <div class="modal-skills-name">{{ spellSelected.name }}</div>
            <div class="modal-skills-description">{{ spellSelected.description }}</div>
          </div>

          <div class="fixed-bottom row justify-center items-center bg-transparent q-mb-xl q-gutter-lg">
            <q-img
              v-if="champion"
              class="cursor-pointer"
              spinner-color="black"
              width="48px"
              height="48px"
              :src="require('../../statics/league-of-legends/icons/passive/' + champion.passive.image.full)"
              :style="spellSelected.name === champion.passive.name ? 'border: solid 2px #c9aa71' : ''"
              @click="spellSelected = champion.passive"
            />

            <template v-for="(spell, i) in champion.spells">
              <q-img
                :key="i"
                v-if="champion"
                class="cursor-pointer"
                spinner-color="black"
                width="48px"
                height="48px"
                :src="require('../../statics/league-of-legends/icons/spell/' + spell.image.full)"
                :style="spellSelected.name === spell.name ? 'border: solid 2px #c9aa71' : ''"
                @click="spellSelected = spell"
              />
            </template>
          </div>
        </template>

        <div v-else class="fixed-center bg-transparent">
          <div class="modal-lore-champion-name">{{ champion.name }}</div>
          <div class="text-center modal-lore-champion-name" style="font-size: 14px">Skills</div>
        </div>
      </q-img>

      <div class="col bg-dark">
        <template v-for="(menu, i) in menuItems">
          <q-btn
            :key="i"
            rounded
            color="dark"
            class="modal-skills-between-divs"
            :label="$q.screen.gt.sm ? menu.label : ''"
            :icon="menu.icon"
            :style="menu.style"
            @click="menu.action()"
          >
            <q-tooltip v-if="$q.screen.lt.md" :offset="[3, 3]">{{ menu.label }}</q-tooltip>
          </q-btn>
        </template>

        <template v-if="$q.screen.lt.md">
          <div class="q-pa-xl text-white">
            <div class="modal-skills-type">{{ getLabelTypeSkill() }}</div>
            <div class="modal-skills-name">{{ spellSelected.name }}</div>
            <div class="modal-skills-description">{{ spellSelected.description }}</div>
          </div>

          <div class="row justify-center items-center q-mb-xl q-gutter-md">
            <q-img
              v-if="champion"
              class="cursor-pointer"
              spinner-color="black"
              width="42px"
              height="42px"
              :src="require('../../statics/league-of-legends/icons/passive/' + champion.passive.image.full)"
              :style="spellSelected.name === champion.passive.name ? 'border: solid 2px #c9aa71' : ''"
              @click="spellSelected = champion.passive"
            />

            <template v-for="(spell, i) in champion.spells">
              <q-img
                :key="i"
                v-if="champion"
                class="cursor-pointer"
                spinner-color="black"
                width="42px"
                height="42px"
                :src="require('../../statics/league-of-legends/icons/spell/' + spell.image.full)"
                :style="spellSelected.name === spell.name ? 'border: solid 2px #c9aa71' : ''"
                @click="spellSelected = spell"
              />
            </template>
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
    return {
      spellSelected: this.champion.passive
    }
  },

  methods: {
    getLabelTypeSkill () {
      if (this.spellSelected.name === this.champion.passive.name) return 'PASSIVA'

      const indexSpell = this.champion.spells.findIndex(spell => spell.name === this.spellSelected.name)

      switch (indexSpell) {
        case 0 : return 'Q'
        case 1 : return 'W'
        case 2 : return 'E'
        case 3 : return 'R'
      }

      return ''
    }
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
          label: 'Lore',
          icon: 'auto_stories',
          style: 'left: 50%',
          action: () => this.setView('ModalChampionLore')
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
.modal-skills-img-champion {
  filter: brightness(15%);
}

.modal-skills-between-divs {
  display: block;
  position: absolute;
  transform: translateY(-50%) translateX(-50%);
}

.modal-skills-type {
  color: #7E7E7E;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
}

.modal-skills-name {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16px;
}

.modal-skills-description {
  text-align: justify;
}
</style>
