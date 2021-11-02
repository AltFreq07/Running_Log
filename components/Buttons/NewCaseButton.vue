<template>
  <div>
    <v-btn color="primary" class="mx-2" @click="$refs.templates.dialog = true"
      >New &nbsp;<v-icon>{{ mdiBriefcasePlus }}</v-icon></v-btn
    >
    <template-dialog ref="templates" />
  </div>
</template>

<script>
import TemplateDialog from './TemplateDialog.vue'
import mdiBriefcasePlus from '@/mixins/Icons/mdiBriefcasePlus.js'

export default {
  mixins: [mdiBriefcasePlus],
  components: { TemplateDialog },
}
</script>
