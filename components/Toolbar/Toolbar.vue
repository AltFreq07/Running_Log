<template>
  <v-app-bar app dense>
    <v-spacer />
    <toolbar-title :case-id="caseId" :title="title" />
    <v-spacer />
    <new-case-button />
    <load-case-button />
    <export-case-button :case-data="caseData" />
    <options-menu />
  </v-app-bar>
</template>


<script>
import LoadCaseButton from '../../components/Buttons/LoadCaseButton.vue'
import NewCaseButton from '../../components/Buttons/NewCaseButton.vue'
import ExportCaseButton from '../../components/Buttons/ExportCaseButton.vue'
import OptionsMenu from './OptionsMenu/OptionsMenu.vue'
export default {
  components: { NewCaseButton, LoadCaseButton, ExportCaseButton, OptionsMenu },
  props: {
    caseId: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    caseData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>