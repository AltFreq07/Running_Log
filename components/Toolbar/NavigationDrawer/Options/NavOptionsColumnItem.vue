<template>
  <v-list-item @click="$refs.columnEditDialog.dialog = true">
    <column-edit-dialog ref="columnEditDialog" :case-id="caseId" />
    <v-list-item-title>Edit Columns</v-list-item-title>
    <v-list-item-icon><v-icon>mdi-table-edit</v-icon></v-list-item-icon>
  </v-list-item>
</template>

<script>
import ColumnEditDialog from './ColumnEdit/ColumnEditDialog.vue'
export default {
  components: { ColumnEditDialog },
  props: {
    caseId: {
      type: String,
      default: '',
    },
  },
}
</script>