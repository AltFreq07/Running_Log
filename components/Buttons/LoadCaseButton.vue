<template>
  <div class="text-center">
    <v-btn color="primary" class="mx-2" @click="$refs.loadDialog.dialog = true"
      >Load &nbsp;<v-icon>{{ mdiBriefcaseEye }}</v-icon></v-btn
    >
    <load-dialog ref="loadDialog" />
  </div>
</template>

<script>
import LoadDialog from './LoadDialog.vue'
import mdiBriefcaseEye from '@/mixins/Icons/mdiBriefcaseEye'

export default {
  mixins: [mdiBriefcaseEye],
  components: { LoadDialog },
}
</script>