<template>
  <v-simple-checkbox
    :ripple="false"
    :value="realBool"
    @click="
      $emit('updateData', !realBool)
      realBool = !realBool
    "
    :off-icon="mdiCheckboxBlankOutline"
    :on-icon="mdiCheckboxMarked"
  ></v-simple-checkbox>
</template>

<script>
import ColumnProps from '~/mixins/ColumnProps.js'
import mdiCheckboxBlankOutline from '@/mixins/Icons/mdiCheckboxBlankOutline.js'
import mdiCheckboxMarked from '@/mixins/Icons/mdiCheckboxMarked.js'
export default {
  mixins: [ColumnProps, mdiCheckboxBlankOutline, mdiCheckboxMarked],
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