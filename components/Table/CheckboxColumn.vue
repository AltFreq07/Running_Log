<template>
  <v-simple-checkbox
    :ripple="false"
    :value="bool"
    @click="$emit('updateData', !bool)"
  ></v-simple-checkbox>
</template>

<script>
import ColumnProps from '~/mixins/ColumnProps.js'
export default {
  mixins: [ColumnProps],
}
</script>