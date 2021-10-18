<template>
  <div>
    <toolbar-export :case-id="caseData.id" :title="caseData.title" />
    <log-table-export ref="dataTable" :case-data="caseData" />
  </div>
</template>

<script>
import ToolbarExport from '../../components/Export/Toolbar/ToolbarExport.vue'
import LogTableExport from '../../components/Export/Table/LogTableExport.vue'
export default {
  components: { LogTableExport, ToolbarExport },
  asyncData({ params, req }) {
    const importType = params.import
    return { importType, caseData: req.body }
  },
}
</script>