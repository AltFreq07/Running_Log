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
import * as ExportFunctions from '@/services/ExportService.js'

export default {
  components: { LogTableExport, ToolbarExport, PagePreload },
  async fetch() {
    try {
      this.caseData = await ExportFunctions.getDataFromHTML(
        this.$route.query.data
      )
      this.asyncDone = true
    } catch (e) {
      alert('Error loading data, please use the original html file')

      this.$router.push('/')
    }
  },
  data() {
    return {
      loading: true,
      asyncDone: false,
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
    setTimeout(
      function () {
        this.loading = false
      }.bind(this),
      250
    )
  },
}
</script>