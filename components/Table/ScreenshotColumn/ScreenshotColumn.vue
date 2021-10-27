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
import GalleryIcon from '@/mixins/GalleryIcon.js'
import ColumnProps from '~/mixins/ColumnProps.js'
import PasteMethods from '@/mixins/PasteMethods.js'
export default {
  components: { ScreenshotSnackbar, ScreenshotCarousel },
  mixins: [ColumnProps, GalleryIcon, PasteMethods],
}
</script>