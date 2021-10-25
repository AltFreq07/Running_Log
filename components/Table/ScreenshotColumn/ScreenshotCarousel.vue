<template>
  <v-dialog v-model="dialog" width="100%">
    <v-carousel
      height="90vh"
      :hide-delimiter-background="hideControls"
      :hide-delimiters="hideControls"
      @change="activateControls"
    >
      <v-carousel-item v-for="(image, i) in array" :key="i">
        <v-sheet height="100%" width="100%" absolute>
          <v-container style="height: inherit">
            <v-row
              style="height: inherit"
              class="ma-0"
              align="center"
              justify="center"
            >
              <img :src="image" class="imageFit" />
              <delete-button
                :index="i"
                :array="array"
                @click="activateControls()"
                @closeDialoge="dialog = false"
                :caseID="caseID"
                :caseRow="caseRow"
                :caseHeader="caseHeader"
              />
            </v-row>
          </v-container>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<style>
.imageFit {
  max-height: 100%;
  max-width: 100%;
}
</style>

<script>
import ColumnProps from '~/mixins/ColumnProps.js'
import ActivateGalleryControls from '~/mixins/ActivateGalleryControls'
import DeleteButton from '@/components/Buttons/DeleteButton.vue'
export default {
  mixins: [ColumnProps, ActivateGalleryControls],
  components: { DeleteButton },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>