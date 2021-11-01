<template>
  <div>
    <v-btn @click="array.length > 0 ? ($refs.carousel.dialog = true) : ''"
      ><v-icon>{{ getIcon }}</v-icon></v-btn
    >
    <gallery-carousel ref="carousel" :array="array" />
  </div>
</template>

<script>
import GalleryCarousel from './GalleryCarousel.vue'
import GalleryIcon from '@/mixins/GalleryIcon.js'
import ColumnProps from '~/mixins/ColumnProps.js'
export default {
  components: { GalleryCarousel },
  mixins: [ColumnProps, GalleryIcon],
}
</script>