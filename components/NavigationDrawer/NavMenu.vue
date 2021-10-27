<template>
  <v-navigation-drawer app right temporary v-model="drawer">
    <nav-title />
    <nav-items :caseData="caseData" />
    <template v-slot:append>
      <nav-options :case-data="caseData" />
    </template>
  </v-navigation-drawer>
</template>.

<script>
import NavTitle from './NavTitle.vue'
import NavItems from './NavItems.vue'
import NavOptions from './Options/NavOptions.vue'
import CaseDataProp from '@/mixins/CaseDataProp.js'

export default {
  mixins: [CaseDataProp],
  components: { NavTitle, NavItems, NavOptions },
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
  },
}
</script>