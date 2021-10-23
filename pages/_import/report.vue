<template>
  <div>
    <toolbar-export :case-id="id" :title="title" />
    <log-table-export ref="dataTable" :case-data="data" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ToolbarExport from '../../components/Export/Toolbar/ToolbarExport.vue'
import LogTableExport from '../../components/Export/Table/LogTableExport.vue'

export default {
  components: { LogTableExport, ToolbarExport },
  asyncData({ params, req }) {
    const importType = params.import
    return { importType, caseData: req.body }
  },
  computed: {
    id() {
      return this.caseData ? this.caseData.id : ''
    },
    title() {
      return this.caseData ? this.caseData.title : this.id
    },
    data() {
      return this.caseData ? this.caseData : { columns: this.defaultColumns }
    },
    ...mapGetters({
      defaultColumns: 'defaults/getDefaultColumns',
    }),
    dataExists() {
      return this.caseData !== undefined
    },
  },
  mounted() {
    if (!this.dataExists) {
      alert(
        'Please use the original HTML file provided to load the requested data.'
      )
      window.close()
    }
  },
}
</script>