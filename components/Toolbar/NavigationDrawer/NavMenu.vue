<template>
  <v-navigation-drawer app right temporary v-model="drawer">
    <nav-title />
    <nav-items :caseData="caseData" />
    <template v-slot:append>
      <nav-options :case-id="caseData.id" />
    </template>
  </v-navigation-drawer>
</template>.

<script>
import NavTitle from './NavTitle.vue'
import NavItems from './NavItems.vue'
import NavOptions from './NavOptions.vue'

export default {
  components: { NavTitle, NavItems, NavOptions },
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
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