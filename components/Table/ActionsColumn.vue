<template>
  <v-icon small @click="$emit('deleteClicked')"> {{ mdiDelete }} </v-icon>
</template>

<script>
import mdiDelete from '@/mixins/Icons/mdiDelete.js'
export default {
  mixins: [mdiDelete],
}
</script>
