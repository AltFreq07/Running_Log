<template>
  <v-btn
    elevation="2"
    color="primary"
    id="addItemBtn"
    @click="
      addDefaultData({ id: caseData.id, default: getDefaultColData() })
      scroll()
    "
  >
    Add Item
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getDefaultColData() {
      const def = {}
      for (const col of this.caseData.columns) {
        console.log(col.type)
        console.log(col.type === 'DateTime')
        if (col.type === 'DateTime') {
          const now = new Date()
          now.setHours(now.getHours() + (now.getTimezoneOffset() / 60) * -1)
          def[col.value] = now.toJSON().slice(0, -5)
        }
      }
      return def
    },
    scroll() {
      this.$vuetify.goTo('#addItemBtn', {
        duration: 1000,
        offset: 0,
        easing: 'easeInOutCubic',
      })
    },
    ...mapActions({
      addDefaultData: 'cases/addDefaultData',
    }),
  },
}
</script>