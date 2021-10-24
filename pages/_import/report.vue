<template>
  <div>
    <div v-if="!asyncDone || loading" class="center-page">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <p class="primary-text pt-4 text-center">Loading</p>
    </div>
    <div v-else>
      <toolbar-export :case-id="id" :title="title" />
      <log-table-export ref="dataTable" :case-data="data" />
    </div>
  </div>
</template>

<style>
.center-page {
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>

<script>
import { mapGetters } from 'vuex'
import ToolbarExport from '../../components/Export/Toolbar/ToolbarExport.vue'
import LogTableExport from '../../components/Export/Table/LogTableExport.vue'

export default {
  components: { LogTableExport, ToolbarExport },
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
        console.log(this.loading, this.asyncDone, 'BOOL')
      }.bind(this),
      250
    )
  },
}
</script>