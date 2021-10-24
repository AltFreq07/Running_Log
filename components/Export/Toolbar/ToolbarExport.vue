<template>
  <v-app-bar app dense>
    <v-spacer />
    <toolbar-title-export :title="caseData.title" />
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
    caseData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>