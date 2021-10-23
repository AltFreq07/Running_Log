<template>
  <v-dialog v-model="dialog" width="100%">
    <v-carousel
      height="90vh"
      :hide-delimiter-background="hideControls"
      :hide-delimiters="hideControls"
      @change="activateControls"
    >
      <v-carousel-item
        v-for="(image, i) in array"
        :key="i"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-sheet height="100%" width="100%" absolute>
          <v-container style="height: inherit">
            <v-row
              style="height: inherit"
              class="ma-0"
              align="center"
              justify="center"
            >
              <img :src="image" class="imageFit" />
              <v-btn
                style="bottom: 55px"
                color="error"
                fab
                small
                dark
                absolute
                bottom
                right
                @click="removeImage(i)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
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
import { mapActions } from 'vuex'
import ColumnProps from '~/mixins/ColumnProps.js'

export default {
  mixins: [ColumnProps],
  data() {
    return {
      dialog: false,
      hideControls: false,
      timer: undefined,
    }
  },
  methods: {
    activateControls() {
      console.log('hiding controls')
      this.hideControls = false
      if (this.timer !== undefined) window.clearTimeout(this.timer)
      this.timer = setTimeout(
        function () {
          this.hideControls = true
          console.log('hiding controls now')
        }.bind(this),
        2000
      )
    },
    removeImage(i) {
      if (this.array.length === 1) {
        this.dialog = false
      }
      this.removeArrayData({
        id: this.caseID,
        row: this.caseRow,
        header: this.caseHeader,
        data: i,
      })
    },
    ...mapActions({
      removeArrayData: 'cases/removeArrayData',
    }),
  },
}
</script>