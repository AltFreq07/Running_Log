<template>
  <v-list-item @click="$refs.columnEditDialog.dialog = true">
    <column-edit-dialog ref="columnEditDialog" :case-data="caseData" />
    <v-list-item-title>Edit Columns</v-list-item-title>
    <v-list-item-icon
      ><v-icon>{{ mdiTableEdit }}</v-icon></v-list-item-icon
    >
  </v-list-item>
</template>

<script>
import ColumnEditDialog from '@/components/ColumnEdit/ColumnEditDialog.vue'
import CaseDataProp from '@/mixins/CaseDataProp.js'
import mdiTableEdit from '@/mixins/Icons/mdiTableEdit.js'

export default {
  mixins: [CaseDataProp, mdiTableEdit],
  components: { ColumnEditDialog },
}
</script>