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
    <v-icon>mdi-delete</v-icon>
  </v-btn>
</template>

<script>
import ColumnProps from '~/mixins/ColumnProps.js'

export default {
  mixins: [ColumnProps],
}
</script>