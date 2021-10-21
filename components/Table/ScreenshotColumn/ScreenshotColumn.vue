<template>
  <div>
    <v-btn
      @click="
        array.length > 0
          ? ($refs['carousel-' + caseHeader + '-' + caseRow].dialog = true)
          : ($refs['snackbar-' + caseHeader + '-' + caseRow].snackbar = true)
      "
      ><v-icon :color="array.length > 0 ? 'primary' : ''">{{
        getIcon
      }}</v-icon></v-btn
    >
    <screenshot-snackbar
      :ref="'snackbar-' + caseHeader + '-' + caseRow"
      :snackbar="true"
    />
    <screenshot-carousel
      :ref="'carousel-' + caseHeader + '-' + caseRow"
      :array="array"
      :caseID="caseID"
      :caseRow="caseRow"
      :caseHeader="caseHeader"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ScreenshotSnackbar from './ScreenshotSnackbar.vue'
import ScreenshotCarousel from './ScreenshotCarousel.vue'

import ColumnProps from '~/mixins/ColumnProps.js'
export default {
  components: { ScreenshotSnackbar, ScreenshotCarousel },
  mixins: [ColumnProps],
  methods: {
    pasteEvent(e) {
      for (let i = 0; i < e.clipboardData.items.length; i++) {
        ;(async (item) => {
          if (item.type.includes('image')) {
            const blob = await new Response(item.getAsFile()).blob()
            const base64 = await this.toBase64(blob)
            this.pushCaseData({
              id: this.caseID,
              row: this.caseRow,
              header: this.caseHeader,
              data: base64,
            })
          }
        })(e.clipboardData.items[i])
      }
    },
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    },
    ...mapActions({
      pushCaseData: 'cases/addArrayData',
    }),
  },
  computed: {
    getIcon() {
      switch (this.array.length) {
        case 0:
          return 'mdi-image-plus'
        case 1:
          return 'mdi-numeric-1-box'
        case 2:
          return 'mdi-numeric-2-box-multiple'
        case 3:
          return 'mdi-numeric-3-box-multiple'
        case 4:
          return 'mdi-numeric-4-box-multiple'
        case 5:
          return 'mdi-numeric-5-box-multiple'
        case 6:
          return 'mdi-numeric-6-box-multiple'
        case 7:
          return 'mdi-numeric-7-box-multiple'
        case 8:
          return 'mdi-numeric-8-box-multiple'
        default:
          return 'numeric-9-plus-box-multiple'
      }
    },
  },
}
</script>