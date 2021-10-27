<template>
  <v-dialog v-model="dialog" max-width="80%" max-height="80%">
    <v-card>
      <v-card-title class="text-h5"> Edit Table Columns </v-card-title>
      <column-edit-table :case-data="caseData" />
      <v-card-actions>
        <v-spacer />

        <v-btn text @click="dialog = false"> Done </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ColumnEditTable from './ColumnEditTable.vue'
import CaseDataProp from '@/mixins/CaseDataProp.js'

export default {
  mixins: [CaseDataProp],

  components: { ColumnEditTable },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>