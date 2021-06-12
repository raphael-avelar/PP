<template>
  <div class="fit row items-stretch content-stretch">
    <q-page class="fit" style="margin-left: 18rem; margin-right: 18rem;">
      {{ nomeInvocador }}
    </q-page>
  </div>
</template>

<script>
export default {
  props: ['nomeInvocador'],

  data () {
    return {
    }
  },

  mounted () {},

  methods: {
  }
}
</script>
