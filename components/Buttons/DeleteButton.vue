<template>
  <v-btn
    style="bottom: 55px"
    color="error"
    fab
    small
    dark
    absolute
    bottom
    right
    @click="
      $emit('click', $event)
      removeImage()
    "
  >
    <v-icon>mdi-delete</v-icon>
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex'
import ColumnProps from '~/mixins/ColumnProps.js'

export default {
  mixins: [ColumnProps],
  props: {
    index: {
      type: Number,
      default: -1,
    },
  },
  methods: {
    removeImage(i) {
      if (this.array.length === 1) {
        this.$emit('closeDialoge')
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