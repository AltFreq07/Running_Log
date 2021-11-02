<template>
  <v-list-item link @click="$refs.templates.dialog = true">
    <v-list-item-icon>
      <v-icon>{{ mdiBriefcasePlus }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>New</v-list-item-title>
    </v-list-item-content>
    <template-dialog ref="templates" />
  </v-list-item>
</template>

<script>
import TemplateDialog from '../Buttons/TemplateDialog.vue'
import mdiBriefcasePlus from '@/mixins/Icons/mdiBriefcasePlus.js'

export default {
  mixins: [mdiBriefcasePlus],
  components: { TemplateDialog },
}
</script>