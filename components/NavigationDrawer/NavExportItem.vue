<template>
  <v-list-group
    :prepend-icon="mdiFileExport"
    :append-icon="mdiChevronDown"
    no-action
  >
    <template v-slot:activator>
      <v-list-item-title>Export</v-list-item-title>
    </template>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      link
      @click="getExportData(item)"
    >
      <v-list-item-title>{{ item }}</v-list-item-title>
      <v-list-item-icon>
        <v-icon>{{ getIcon(item) }}</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list-group>
</template>

<script>
import * as ExportFunctions from '@/services/ExportService.js'
import mdiFileExport from '@/mixins/Icons/mdiFileExport.js'
import mdiLanguageHtml5 from '@/mixins/Icons/mdiLanguageHtml5.js'
import mdiLanguageMarkdown from '@/mixins/Icons/mdiLanguageMarkdown.js'
import mdiCodeJson from '@/mixins/Icons/mdiCodeJson.js'
import mdiChevronDown from '@/mixins/Icons/mdiChevronDown.js'
export default {
  mixins: [
    mdiFileExport,
    mdiLanguageHtml5,
    mdiLanguageMarkdown,
    mdiCodeJson,
    mdiChevronDown,
  ],
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      items: ['HTML', 'Markdown', 'JSON'],
    }
  },
  methods: {
    getIcon(title) {
      switch (title) {
        case 'HTML':
          return this.mdiLanguageHtml5
        case 'Markdown':
          return this.mdiLanguageMarkdown
        case 'JSON':
          return this.mdiCodeJson
      }
    },
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
            await this.getMarkdownData(),
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
    async getMarkdownData() {
      return await ExportFunctions.getMarkdownData(this.caseData)
    },
  },
}
</script>