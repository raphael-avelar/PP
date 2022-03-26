<template>
  <q-dialog ref="modal" persistent transition-show="scale" transition-hide="scale">
    <q-card style="width: 700px; max-width: 80vw;">
      <div class="fit">
        <q-img
          v-if="champion"
          :src="champion.splashs[0].img"
          spinner-color="black"
          img-class="modal-img-champion"
        >
          <div class="fixed-bottom q-ml-lg bg-transparent" v-if="!$q.screen.xs">
            <div class="modal-champion-name">{{ champion.name }}</div>
            <div class="modal-champion-title">{{ champion.title }}</div>
          </div>
        </q-img>
      </div>

      <q-btn class="absolute-top-right text-white q-ma-sm" dense round flat icon="close" v-close-popup />
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data () {
    return {
      champion: null
    }
  },

  methods: {
    show (champion) {
      this.$refs.modal.show()
      this.champion = champion
    }
  }
}
</script>

<style>
.modal-img-champion {
  filter: brightness(60%)
}

.modal-champion-name {
  font-size: 35px;
  font-family: BeaufortLoL;
  text-transform: uppercase;
  letter-spacing: 3px;
  word-spacing: 3px;
  font-weight: 600;
  color: #c9aa71;
}

.modal-champion-title {
  font-size: 26px;
  font-family: BeaufortLoL;
  letter-spacing: 3px;
  text-transform: uppercase;
  word-spacing: 3px;
  font-weight: 600;
  color: #c9aa71;
}
</style>
