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
    @click="$emit('click')"
  >
    <v-icon>{{ mdiDelete }}</v-icon>
  </v-btn>
</template>

<script>
import ColumnProps from '~/mixins/ColumnProps.js'
import mdiDelete from '~/mixins/Icons/mdiDelete.js'
export default {
  mixins: [ColumnProps, mdiDelete],
}
</script>