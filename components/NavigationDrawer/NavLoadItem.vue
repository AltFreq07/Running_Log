<template>
  <v-list-item link @click="$refs.loadDialog.dialog = true">
    <v-list-item-icon>
      <v-icon>{{ mdiBriefcaseEye }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>Load</v-list-item-title>
    </v-list-item-content>
    <load-dialog ref="loadDialog" />
  </v-list-item>
</template>

<script>
import LoadDialog from '../Buttons/LoadDialog.vue'
import mdiBriefcaseEye from '@/mixins/Icons/mdiBriefcaseEye.js'

export default {
  mixins: [mdiBriefcaseEye],
  components: { LoadDialog },
}
</script>