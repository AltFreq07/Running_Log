<template>
  <v-dialog v-model="dialog" max-width="80%" max-height="80%">
    <v-card>
      <v-card-title class="text-h5"> Edit Table Columns </v-card-title>
      <column-edit-table :case-id="caseId" />
      <v-card-actions>
        <v-spacer />

        <v-btn text @click="dialog = false"> Done </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ColumnEditTable from './ColumnEditTable.vue'
export default {
  props: {
    caseId: {
      type: String,
      default: '',
    },
  },
  components: { ColumnEditTable },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>