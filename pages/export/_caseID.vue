<template>
  <div>
    <toolbar-export :case-id="caseID" :title="caseData.title" />
    <log-table-export :case-data="caseData" ref="dataTable" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ToolbarExport from '../../components/Export/Toolbar/ToolbarExport.vue'
import LogTableExport from '../../components/Export/Table/LogTableExport.vue'
export default {
  components: { LogTableExport, ToolbarExport },
  //   middleware: ['case'],
  asyncData({ params }) {
    const caseID = params.caseID // When calling /abc the slug will be "abc"
    return { caseID }
  },
  data() {
    return {
      caseData: {},
    }
  },
  computed: {
    ...mapGetters({
      getCase: 'cases/getCase',
    }),
  },
  mounted() {
    this.caseData = this.getCase(this.caseID)
  },
}
</script>