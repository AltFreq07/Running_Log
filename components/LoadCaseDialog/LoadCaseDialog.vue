<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent width="400">
      <v-card elevation="2">
        <v-card-title class="text-h5 justify-center">
          Select Option
        </v-card-title>
        <v-card-actions>
          <new-case-button />
          <v-spacer />
          <import-case-button />
          <v-spacer />
          <load-case-button />
        </v-card-actions>
        <v-card-subtitle class="warning--text pt-5"
          >Warning: All data is saved within the browsers storage. Clearing the
          browsers cache may clear the stored data. Be sure to export your data
          to ensure persistence.</v-card-subtitle
        >
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import NewCaseButton from '../Buttons/NewCaseButton.vue'
import LoadCaseButton from '../Buttons/LoadCaseButton.vue'
import ImportCaseButton from '../Buttons/ImportCaseButton.vue'
export default {
  components: { NewCaseButton, LoadCaseButton, ImportCaseButton },
  data() {
    return {
      dialog: true,
    }
  },
}
</script>