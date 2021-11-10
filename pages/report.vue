<template>
  <log-table-export ref="dataTable" :case-data="data" />
</template>


<script>
import LogTableExport from '@/components/Export/Table/LogTableExport.vue'
import * as ExportService from '@/services/ExportService'
export default {
  components: {
    LogTableExport,
  },
  data() {
    return {
      data: undefined,
    }
  },
  methods: {
    saveAs(uri, filename) {
      const link = document.createElement('a')

      if (typeof link.download === 'string') {
        link.href = uri
        link.download = filename
        //  Firefox requires the link to be in the body
        document.body.appendChild(link)
        //  simulate click
        link.click()
        //  remove the link when done
        document.body.removeChild(link)
      } else {
        window.open(uri)
      }
    },
  },
  mounted() {
    this.data = this.$route.params.data

    setTimeout(
      async function () {
        if (this.data === undefined) {
          this.$router.push('/')
        } else {
          // console.log(await ExportService.getHTMLData(this.data))
          this.saveAs(
            URL.createObjectURL(
              new Blob([await ExportService.getHTMLData(this.data)])
            ),
            'report.html'
          )
        }
      }.bind(this),
      500
    )
  },
}
</script>