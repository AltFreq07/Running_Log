<template>
  <v-btn
    elevation="2"
    color="primary"
    id="addItemBtn"
    @click="
      addDefaultData({ id: caseData.id, default: getDefaultData(caseData) })
      scroll()
    "
  >
    Add Item
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex'
import AddTableItem from '@/mixins/AddTableItem.js'
export default {
  mixins: [AddTableItem],
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
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