<template>
  <v-navigation-drawer app right temporary v-model="drawer">
    <v-list-item>
      <v-list-item-icon> </v-list-item-icon>
      <v-list-item-content>
        <!-- <v-list-item-title class="text-h6"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle> -->
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item link @click="newCase">
        <v-list-item-icon>
          <v-icon>mdi-briefcase-plus</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>New</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group prepend-icon="mdi-briefcase-eye">
        <template v-slot:activator>
          <v-list-item-title>Load</v-list-item-title>
        </template>

        <v-list-group
          no-action
          sub-group
          v-for="(item, value, i) in getCategories"
          :key="i"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ value }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(data, index) in item"
            :key="index"
            link
            :to="'/case/' + data.id"
          >
            <v-list-item-title>{{
              data.title === '' ? data.id : data.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list-group>
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
    </v-list>
    <template v-slot:append>
      <v-list dense>
        <v-list-group prepend-icon="mdi-cog" no-action>
          <template v-slot:activator>
            <v-list-item-title>Options</v-list-item-title>
          </template>
          <v-list-item
            @click="
              $vuetify.theme.dark = !$vuetify.theme.dark
              toggleTheme()
            "
          >
            <v-list-item-title
              v-text="$vuetify.theme.dark ? 'Light Mode' : 'Dark Mode'"
            ></v-list-item-title>
            <v-list-item-icon
              ><v-icon>{{
                $vuetify.theme.dark
                  ? 'mdi-white-balance-sunny '
                  : 'mdi-moon-waning-crescent'
              }}</v-icon></v-list-item-icon
            >
          </v-list-item>
        </v-list-group>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>.

<script>
import { v4 as uuidv4 } from 'uuid'
import { mapActions, mapGetters } from 'vuex'
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
      drawer: false,
      items: [
        { title: 'HTML', icon: 'mdi-language-html5' },
        { title: 'Markdown', icon: 'mdi-language-markdown-outline' },
        { title: 'JSON', icon: 'mdi-code-json' },
      ],
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    newCase() {
      const uuid = uuidv4()
      this.createCase({
        id: uuid,
        // TODO default columns editable
        columns: this.defaultColumns,
        title: '',
        lists: {},
        data: [],
      })
      this.$router.push('/case/' + uuid)
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
    ...mapActions({
      createCase: 'cases/createCase',
      toggleTheme: 'settings/toggleTheme',
    }),
  },
  computed: {
    ...mapGetters({
      getCases: 'cases/getCases',
    }),
    getCategories() {
      const categories = {}
      for (const item of this.getCases) {
        let category = item.category
        if (category === undefined || category === '')
          category = 'Uncategorised'
        if (categories[category] === undefined) {
          categories[category] = [item]
        } else {
          categories[category].push(item)
        }
      }
      return categories
    },
  },
}
</script>