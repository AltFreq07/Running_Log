<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent width="300">
      <v-card>
        <v-card-title class="text-h5 justify-center">
          Select Option
        </v-card-title>
        <v-card-actions>
          <new-case-button color="primary" />
          <v-spacer></v-spacer>
          <load-case-button color="primary" />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import NewCaseButton from '../Buttons/NewCaseButton.vue'
import LoadCaseButton from '../Buttons/LoadCaseButton.vue'
export default {
  components: { NewCaseButton, LoadCaseButton },
  data() {
    return {
      dialog: true,
    }
  },
}
</script>