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
          @click="
            item.title === 'HTML'
              ? exportData(
                  getData(),
                  caseData.title === '' ? caseData.id : caseData.title,
                  'json',
                  'text/html'
                )
              : exportData(
                  JSON.stringify(caseData, null, 4),
                  caseData.title === '' ? caseData.id : caseData.title,
                  'json',
                  'text/json'
                )
          "
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import ButtonIcon from './ButtonIcon.vue'

export default {
  components: { ButtonIcon },
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    items: [{ title: 'HTML' }, { title: 'JSON' }],
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
    decodeHtml(html) {
      const txt = document.createElement('textarea')
      txt.innerHTML = html
      return txt.value
    },
    getData() {
      const data =
        `
      <!DOCTYPE html>
<html>

<head>
    <title>` +
        this.caseData.title +
        `</title>
</head>

<body>
    <form action="` +
        window.location.protocol +
        `//` +
        window.location.host +
        `/unencrypted/report" method="post" id="form" enctype="multipart/form-data">
        <input type="hidden" value="" name='data' id="data">
    </form>
    <button onclick="clicked()">Click</button>
</body>
` +
        this.decodeHtml('&lt;script&gt;') +
        `
        const basicObject = ` +
        JSON.stringify(this.caseData) +
        `
window.onload = function (e) {
       document.querySelector('#data').value = JSON.stringify(basicObject)

        document.querySelector('#form').submit()
    }
    function clicked() {
        document.querySelector('#data').value = JSON.stringify(basicObject)

        document.querySelector('#form').submit()
    }n
    ` +
        this.decodeHtml('&lt;/script&gt;') +
        `
</html>
      `
      return data
    },
  },
}
</script>
