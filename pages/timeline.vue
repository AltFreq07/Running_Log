<template>
  <page-preload v-if="$fetchState.pending || loading" class="center-page" />
  <div v-else>
    <v-timeline dense>
      <v-btn
        v-if="type === 'Preview'"
        color="primary"
        fab
        fixed
        large
        bottom
        right
        @click="goBack"
      >
        <v-icon>{{ mdiKeyboardBackspace }}</v-icon>
      </v-btn>
      <v-timeline-item
        class="mb-6"
        fill-dot
        :color="titleColor"
        large
        id="headerItem"
      >
        <h2>
          {{ getTitle }}
        </h2>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        :color="data[index].important ? importantColor : baseColor"
        icon-color="grey lighten-2"
        small
        v-for="(item, index) in dateSorted"
        :key="index"
      >
        <v-row justify="space-between">
          <v-col cols="7">
            <span
              v-for="(line, index) in item.data !== undefined
                ? item.data.toString().split('\n')
                : ''"
              :key="index"
              >{{ line }}<br />
            </span>
          </v-col>
          <v-col class="text-right" cols="5">
            {{ getUTCString(item.date) }}
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<style>
#headerItem > div.v-timeline-item__body {
  padding-top: 10px;
}
</style>

<script>
import { mapGetters } from 'vuex'

import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import PagePreload from '@/components/Loader/PagePreload.vue'
import mdiKeyboardBackspace from '@/mixins/Icons/mdiKeyboardBackspace.js'

export default {
  mixins: [mdiKeyboardBackspace],
  components: { PagePreload },
  fetch() {
    this.type = this.$route.params.type
    this.caseID = this.$route.params.caseID
    this.timezone = this.$route.params.timezone
    this.caseTitle = this.$route.params.caseTitle
    this.data = this.$route.params.data
    this.titleColor = this.$route.params.titleColor
    this.baseColor = this.$route.params.baseColor
    this.importantColor = this.$route.params.importantColor
  },
  data() {
    return {
      type: undefined,
      caseID: undefined,
      caseTitle: undefined,
      timezone: 0,
      data: [],
      titleColor: 'grey',
      baseColor: 'grey',
      importantColor: 'grey',
      loading: true,
    }
  },
  methods: {
    log(b) {
      console.log(b)
    },
    getUTCString(date) {
      const newDate = new Date(date)
      // console.log(newDate.toUTCString())
      newDate.setHours(newDate.getHours() + this.timezone.value)
      return (
        newDate.toUTCString().substring(0, newDate.toUTCString().length - 3) +
        (this.timezone.value > 0 ? '+' : '') +
        this.timezone.value.toString() +
        ':00'
      )
    },

    goBack() {
      return window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
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
    setTimeout(
      function () {
        if (this.caseID === undefined) {
          this.$router.push('/')
        } else {
          this.loading = false
          if (this.type === 'Image') {
            this.$nextTick(
              function () {
                html2canvas(document.querySelector('body')).then((canvas) => {
                  this.saveAs(canvas.toDataURL(), this.getTitle + '.png')
                  this.goBack()
                })
              }.bind(this)
            )
          } else if (this.type === 'PDF')
            this.$nextTick(
              function () {
                html2canvas(document.querySelector('body')).then((canvas) => {
                  let width = canvas.width
                  let height = canvas.height
                  let pdf
                  /* eslint-disable */
                  if (width > height) {
                    pdf = new jsPDF('l', 'px', [width, height])
                  } else {
                    pdf = new jsPDF('p', 'px', [height, width])
                  }
                  /* eslint-enable */
                  width = pdf.internal.pageSize.getWidth()
                  height = pdf.internal.pageSize.getHeight()
                  pdf.addImage(canvas, 'PNG', 0, 0, width, height)

                  pdf.save(this.getTitle + '.pdf')

                  this.goBack()
                })
              }.bind(this)
            )
        }
      }.bind(this),
      300
    )
  },
  computed: {
    ...mapGetters({
      getCase: 'cases/getCase',
    }),
    getTitle() {
      if (this.caseTitle === '' || this.caseTitle === '') {
        return this.caseID
      } else {
        return this.caseTitle
      }
    },
    dateSorted() {
      const obj = [...this.data]
      return obj.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        if (dateA < dateB) return -1
        if (dateA > dateB) return 1
        return 0
      })
    },
  },
}
</script>
