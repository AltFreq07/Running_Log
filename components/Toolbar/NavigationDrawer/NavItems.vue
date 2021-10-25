<template>
  <v-list dense nav>
    <nav-new-case-item />
    <nav-load-item />
    <nav-export-item :case-data="caseData" />
  </v-list>
</template>

<script>
import NavNewCaseItem from './NavNewCaseItem.vue'
import NavLoadItem from './NavLoadItem.vue'
import NavExportItem from './NavExportItem.vue'
export default {
  components: { NavNewCaseItem, NavLoadItem, NavExportItem },
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
