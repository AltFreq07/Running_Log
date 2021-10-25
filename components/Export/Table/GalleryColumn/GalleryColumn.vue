<template>
  <div class="d-flex justify-center">
    <v-btn
      @click="
        array.length > 0
          ? ($refs['carousel-' + caseHeader + '-' + caseRow].dialog = true)
          : ''
      "
      ><v-icon v-if="array.length > 0">{{ getIcon }}</v-icon></v-btn
    >
    <gallery-carousel
      :ref="'carousel-' + caseHeader + '-' + caseRow"
      :array="array"
    />
  </div>
</template>

<script>
import GalleryCarousel from './GalleryCarousel.vue'

import GalleryIcon from '~/mixins/GalleryIcon.js'
export default {
  components: { GalleryCarousel },
  mixins: [GalleryIcon],
}
</script>