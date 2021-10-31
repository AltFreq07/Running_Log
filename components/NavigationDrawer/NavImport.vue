<template>
  <v-list-item link @click="$refs.templates.dialog = true">
    <v-list-item-icon>
      <v-icon>mdi-briefcase-plus</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>New</v-list-item-title>
    </v-list-item-content>
    <template-dialog ref="templates" />
  </v-list-item>
</template>

<script>
import TemplateDialog from '../Buttons/TemplateDialog.vue'

export default {
  components: { TemplateDialog },
}
</script>
    TemplateDialog