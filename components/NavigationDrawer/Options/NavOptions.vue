<template>
  <v-list dense>
    <v-list-group
      :prepend-icon="mdiCog"
      :append-icon="mdiChevronDown"
      no-action
    >
      <template v-slot:activator>
        <v-list-item-title>Options</v-list-item-title>
      </template>
      <nav-options-theme-item />
      <nav-options-column-item :case-data="caseData" />
      <nav-options-delete-item :case-id="caseData.id" />
    </v-list-group>
  </v-list>
</template>

<script>
import NavOptionsThemeItem from '../Options/NavOptionsThemeItem.vue'
import NavOptionsDeleteItem from '../Options/NavOptionsDeleteItem.vue'
import NavOptionsColumnItem from '../Options/NavOptionsColumnItem.vue'
import CaseDataProp from '@/mixins/CaseDataProp.js'
import mdiCog from '@/mixins/Icons/mdiCog.js'
import mdiChevronDown from '@/mixins/Icons/mdiChevronDown.js'
export default {
  mixins: [CaseDataProp, mdiCog, mdiChevronDown],
  components: {
    NavOptionsThemeItem,
    NavOptionsDeleteItem,
    NavOptionsColumnItem,
  },
}
</script>