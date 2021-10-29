<template>
  <v-simple-checkbox
    :ripple="false"
    :value="realBool"
    @click="
      $emit('updateData', !realBool)
      realBool = !realBool
    "
  ></v-simple-checkbox>
</template>

<script>
import ColumnProps from '~/mixins/ColumnProps.js'
export default {
  mixins: [ColumnProps],
  data() {
    return {
      realBool: false,
    }
  },
  mounted() {
    this.realBool = this.bool
  },
}
</script>