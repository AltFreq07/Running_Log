<template>
  <v-list dense>
    <v-list-group prepend-icon="mdi-cog" no-action>
      <template v-slot:activator>
        <v-list-item-title>Options</v-list-item-title>
      </template>
      <nav-options-theme-item />
      <nav-options-column-item :case-id="caseId" />
      <nav-options-delete-item :case-id="caseId" />
    </v-list-group>
  </v-list>
</template>

<script>
import NavOptionsThemeItem from '../Options/NavOptionsThemeItem.vue'
import NavOptionsDeleteItem from '../Options/NavOptionsDeleteItem.vue'
import NavOptionsColumnItem from '../Options/NavOptionsColumnItem.vue'

export default {
  props: {
    caseId: {
      type: String,
      default: '',
    },
  },
  components: {
    NavOptionsThemeItem,
    NavOptionsDeleteItem,
    NavOptionsColumnItem,
  },
}
</script>