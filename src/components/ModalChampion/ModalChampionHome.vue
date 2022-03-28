<template>
  <q-card style="width: 800px; max-width: 80vw">
    <div class="fit column bg-dark">
      <q-img
        v-if="champion"
        :src="champion.splashs[0].img"
        spinner-color="black"
        img-class="modal-home-img-champ"
      >
        <template v-if="$q.screen.gt.sm">
          <div class="fixed-bottom q-ml-lg bg-transparent q-mb-xs">
            <div class="modal-home-champ-name">{{ champion.name }}</div>
            <div class="modal-home-champ-title">{{ champion.title }}</div>
          </div>

          <div class="absolute-bottom-right bg-transparent">
            <template v-for="(stats, i) in statsChampion">
              <div :key="i" class="row items-center q-pa-sm">
                <q-icon :name="stats.icon" />
                <span class="modal-home-stats-value q-pl-sm" :style="`color: ${stats.color}`">{{ stats.value }}</span>
                <q-tooltip :offset="[0, 0]">{{ stats.tooltip }}</q-tooltip>
              </div>
            </template>
          </div>
        </template>
      </q-img>

      <div class="col bg-dark">
        <template v-for="(menu, i) in menuItems">
          <q-btn
            :key="i"
            rounded
            color="dark"
            class="modal-home-between-divs"
            :label="menu.label"
            :icon="$q.screen.gt.sm ? menu.icon : undefined"
            :style="menu.style"
            @click="menu.action()"
          />
        </template>

        <template v-if="$q.screen.lt.md">
          <div class="q-mx-lg q-mt-lg">
            <div class="modal-home-champ-name" style="font-size: 25px">{{ champion.name }}</div>
            <div class="modal-home-champ-title" style="font-size: 14px">{{ champion.title }}</div>
          </div>

          <div class="q-py-lg">
            <q-card dark bordered class="q-mx-xl q-mb-md shadow-24" style="border-color: #1D1D1D">
              <q-card-section class="row justify-center items-center q-gutter-x-md">
                <template v-for="(stats, i) in statsChampion">
                  <div :key="i" class="row items-center q-pa-sm">
                    <q-icon :name="stats.icon" />
                    <span class="modal-home-stats-value q-pl-sm" :style="`color: ${stats.color}`">{{ stats.value }}</span>
                    <q-tooltip :offset="[0, 0]">{{ stats.tooltip }}</q-tooltip>
                  </div>
                </template>
              </q-card-section>
            </q-card>
          </div>
        </template>

        <div v-if="$q.screen.gt.sm" class="q-pa-md"></div>
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
          label: 'Skills',
          icon: 'mdi-script-text',
          style: 'left: 20%',
          action: () => this.setView('ModalChampionSkills')
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
    },

    statsChampion () {
      if (!this.champion) return

      return [
        {
          value: this.champion.stats.hp,
          icon: 'img:' + require('../../statics/league-of-legends/icons-stats/Health_icon.png'),
          tooltip: 'Vida',
          color: '#20985D'
        },
        {
          value: this.champion.stats.attackdamage,
          icon: 'img:' + require('../../statics/league-of-legends/icons-stats/Attack_damage_icon.png'),
          tooltip: 'Dano de Ataque',
          color: '#EC8C34'
        },
        // {
        //   value: 0,
        //   icon: 'img:' + require('../../statics/league-of-legends/icons-stats/Ability_power_icon.png'),
        //   tooltip: 'Poder de Habilidade',
        //   color: '#786CFF'
        // },
        {
          value: this.champion.stats.armor,
          icon: 'img:' + require('../../statics/league-of-legends/icons-stats/Armor_icon.png'),
          tooltip: 'Armadura',
          color: '#F1B957'
        },
        {
          value: this.champion.stats.spellblock,
          icon: 'img:' + require('../../statics/league-of-legends/icons-stats/Magic_resistance_icon.png'),
          tooltip: 'Resistência Mágica',
          color: '#51DEFE'
        },
        {
          value: this.champion.stats.attackspeed,
          icon: 'img:' + require('../../statics/league-of-legends/icons-stats/Attack_speed_icon.png'),
          tooltip: 'Velocidade de Ataque',
          color: '#FFE78C'
        },
        {
          value: this.champion.stats.movespeed,
          icon: 'img:' + require('../../statics/league-of-legends/icons-stats/Movement_speed_icon.png'),
          tooltip: 'Velocidade de Movimento',
          color: '#F2E6D3'
        }
      ]
    }
  }
}
</script>

<style>
.modal-home-img-champ {
  filter: brightness(80%)
}

.modal-home-between-divs {
  display: block;
  position: absolute;
  transform: translateY(-50%) translateX(-50%)
}

.modal-home-champ-name {
  font-size: 34px;
  font-family: BeaufortLoL;
  text-transform: uppercase;
  letter-spacing: 1px;
  word-spacing: 2px;
  font-weight: 600;
  color: #c9aa71;
}

.modal-home-champ-title {
  font-size: 20px;
  font-family: BeaufortLoL;
  letter-spacing: 1px;
  text-transform: uppercase;
  word-spacing: 2px;
  font-weight: 600;
  color: #c9aa71;
}

.modal-home-stats-title {
  font-family: BeaufortLoL;
  text-transform: uppercase;
  word-spacing: 2px;
  font-weight: 600;
  color: #c9aa71;
}

.modal-home-stats-value {
  font-family: BeaufortLoL;
  font-size: 16px;
  font-weight: 600;
}
</style>
