<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <button-icon
          text="Export"
          icon="mdi-file-export"
          color=""
          v-bind="attrs"
          v-on="on"
        />
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="getExportData(item.title)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import ButtonIcon from './ButtonIcon.vue'
import * as ExportFunctions from '@/services/ExportService.js'
export default {
  components: { ButtonIcon },
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    items: [{ title: 'HTML' }, { title: 'Markdown' }, { title: 'JSON' }],
  }),
  methods: {
    exportData(data, filename, ext, type) {
      const file = new Blob([data], { type })
      if (window.navigator.msSaveOrOpenBlob)
        // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename + '.' + ext)
      else {
        // Others
        const a = document.createElement('a')
        const url = URL.createObjectURL(file)
        a.href = url
        a.download = filename + '.' + ext
        document.body.appendChild(a)
        a.click()
        setTimeout(function () {
          document.body.removeChild(a)
          window.URL.revokeObjectURL(url)
        }, 0)
      }
    },
    getExportData(string) {
      switch (string) {
        case 'HTML':
          this.exportData(
            this.getHTMLData(),
            this.caseData.title === '' ? this.caseData.id : this.caseData.title,
            'html',
            'text/html'
          )
          break
        case 'JSON':
          this.exportData(
            JSON.stringify(this.caseData, null, 4),
            this.caseData.title === '' ? this.caseData.id : this.caseData.title,
            'json',
            'text/json'
          )
          break
        case 'Markdown':
          this.exportData(
            this.getMarkdownData(),
            this.caseData.title === '' ? this.caseData.id : this.caseData.title,
            'md',
            'text/markdown'
          )
      }
    },
    getHTMLData() {
      return ExportFunctions.getHTMLData(
        window.location.protocol,
        window.location.host,
        this.caseData
      )
    },
    getMarkdownData() {
      return ExportFunctions.getMarkdownData(this.caseData)
    },
  },
}
</script>
