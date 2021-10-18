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
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
import ColumnProps from '~/mixins/ColumnProps.js'

export default {
  mixins: [ColumnProps],
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
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