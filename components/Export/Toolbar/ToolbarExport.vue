<template>
  <v-app-bar app dense>
    <v-spacer />
    <toolbar-title-export :title="title" />
    <v-spacer />
    <theme-change-icon-button />
  </v-app-bar>
</template>


<script>
import ThemeChangeIconButton from '../../Buttons/ThemeChangeIconButton.vue'
import ToolbarTitleExport from './ToolbarTitleExport.vue'

export default {
  components: { ToolbarTitleExport, ThemeChangeIconButton },
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