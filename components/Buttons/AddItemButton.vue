<template>
  <v-btn
    elevation="2"
    color="primary"
    id="addItemBtn"
    @click="
      addDefaultData({ id: caseData.id, default: getDefaultData() })
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
    getDefaultData() {
      const empty = {}
      for (const col of this.caseData.columns) {
        empty[col.value] = this.getTypeDefault(col.type)
      }
      return empty
    },
    getTypeDefault(datatype) {
      switch (datatype) {
        case 'DateTime': {
          // TODO DEFAULT NOW
          const now = new Date()
          now.setHours(now.getHours() + (now.getTimezoneOffset() / 60) * -1)
          return now.toJSON().slice(0, -5)
        }
        case ('Text', 'List'): {
          // TODO GET LAST LIST ITEM FROM caseDATA
          return ''
        }
        case 'Screenshots': {
          return []
        }
        default:
          return ''
      }
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