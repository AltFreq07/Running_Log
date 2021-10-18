<template>
  <v-app-bar app dense>
    <v-spacer />
    <toolbar-title-export :title="title" />
    <v-spacer />
  </v-app-bar>
</template>


<script>
import ToolbarTitleExport from './ToolbarTitleExport.vue'
export default {
  components: { ToolbarTitleExport },
  props: {
    caseId: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>