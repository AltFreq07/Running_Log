<template>
  <div>
    <page-preload v-if="!asyncDone || loading" class="center-page" />
    <div v-else>
      <toolbar-export :case-data="data" />
      <log-table-export ref="dataTable" :case-data="data" />
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import ToolbarExport from '../../components/Export/Toolbar/ToolbarExport.vue'
import LogTableExport from '../../components/Export/Table/LogTableExport.vue'
import PagePreload from '@/components/Loader/PagePreload.vue'

export default {
  components: { LogTableExport, ToolbarExport, PagePreload },
  asyncData({ params, req }) {
    const importType = params.import
    const asyncDone = true
    return { asyncDone, importType, caseData: req.body }
  },
  data() {
    return {
      loading: true,
    }
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
    setTimeout(
      function () {
        this.loading = false
      }.bind(this),
      250
    )
  },
}
</script>