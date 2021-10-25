<template>
  <v-list-item @click="checkDelete">
    <delete-confirmation-dialog
      ref="deleteConfirmationDialog"
      :case-id="caseId"
    />
    <v-list-item-title class="error--text">Delete Log</v-list-item-title>
    <v-list-item-icon
      ><v-icon color="error">mdi-trash-can</v-icon></v-list-item-icon
    >
  </v-list-item>
</template>

<script>
import DeleteConfirmationDialog from './DeleteConfirmationDialog.vue'
export default {
  components: { DeleteConfirmationDialog },
  props: {
    caseId: {
      type: String,
      default: '',
    },
  },
  methods: {
    checkDelete() {
      this.$refs.deleteConfirmationDialog.dialog = true
    },
  },
}
</script>