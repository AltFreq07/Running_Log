<template>
  <v-list-group prepend-icon="mdi-file-export" no-action>
    <template v-slot:activator>
      <v-list-item-title>Export</v-list-item-title>
    </template>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      link
      @click="getExportData(item.title)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list-group>
</template>

<script>
import * as ExportFunctions from '@/services/ExportService.js'

export default {
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      items: [
        { title: 'HTML', icon: 'mdi-language-html5' },
        { title: 'Markdown', icon: 'mdi-language-markdown-outline' },
        { title: 'JSON', icon: 'mdi-code-json' },
      ],
    }
  },
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
    async getExportData(string) {
      switch (string) {
        case 'HTML':
          this.exportData(
            await this.getHTMLData(),
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