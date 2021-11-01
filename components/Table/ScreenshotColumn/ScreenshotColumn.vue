<template>
  <div>
    <v-btn
      @click="
        array.length > 0
          ? ($refs.carousel.dialog = true)
          : ($refs.snackbar.snackbar = true)
      "
      ><v-icon>{{ getIcon }}</v-icon></v-btn
    >
    <screenshot-snackbar ref="snackbar" :snackbar="true" />
    <screenshot-carousel
      ref="carousel"
      :array="array"
      @removeArrayData="$emit('removeArrayData', $event)"
    />
  </div>
</template>

<script>
import ScreenshotSnackbar from './ScreenshotSnackbar.vue'
import ScreenshotCarousel from './ScreenshotCarousel.vue'
import * as PasteService from '@/services/PasteService.js'
import GalleryIcon from '@/mixins/GalleryIcon.js'
import ColumnProps from '~/mixins/ColumnProps.js'
export default {
  components: { ScreenshotSnackbar, ScreenshotCarousel },
  mixins: [ColumnProps, GalleryIcon],
  methods: {
    pasteEvent(e) {
      PasteService.GetImageBase64(
        e,
        function (b64) {
          this.$emit('pushCaseData', b64)
        }.bind(this)
      )
    },
  },
}
</script>