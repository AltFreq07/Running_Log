<template>
  <tr>
    <td :colspan="caseData.columns ? caseData.columns.length : 0">
      <v-divider width="100%" />
      <v-card class="pa-0 ma-0" height="100%" width="100%">
        <v-row class="py-2 ma-0" justify="center">
          <add-item-button :case-data="caseData" />
        </v-row>
      </v-card>
    </td>
  </tr>
</template>

<script>
import AddItemButton from '../Buttons/AddItemButton.vue'

export default {
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  components: { AddItemButton },
}
</script>
