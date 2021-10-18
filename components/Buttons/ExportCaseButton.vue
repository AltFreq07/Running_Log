<template>
  <button-icon
    text="Export"
    icon="mdi-file-export"
    color=""
    @click="
      exportData(
        getData(),
        caseData.title === '' ? caseData.id : caseData.title,
        'text/html'
      )
    "
  />
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
  methods: {
    exportData(data, filename, type) {
      const file = new Blob([data], { type })
      if (window.navigator.msSaveOrOpenBlob)
        // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename + '.html')
      else {
        // Others
        const a = document.createElement('a')
        const url = URL.createObjectURL(file)
        a.href = url
        a.download = filename + '.html'
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
