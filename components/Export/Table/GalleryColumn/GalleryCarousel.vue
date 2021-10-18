<template>
  <v-dialog v-model="dialog" width="100%">
    <v-carousel height="90vh">
      <v-carousel-item
        v-for="(image, i) in array"
        :key="i"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-sheet height="100%" width="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <img :src="image" class="imageFit" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
import ColumnProps from '~/mixins/ColumnProps.js'

export default {
  mixins: [ColumnProps],
  data() {
    return {
      dialog: false,
    }
  },
}
</script>