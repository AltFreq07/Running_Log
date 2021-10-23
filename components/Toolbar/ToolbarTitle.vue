<template>
  <v-toolbar-title
    ><v-text-field
      class="text-h4 pt-2"
      style="width: 384px"
      :value="caseData === undefined ? '' : caseData.title"
      placeholder="Enter a title"
      :hide-details="true"
      :append-icon="titleIcon ? 'mdi-pencil' : ''"
      @input="updateTitle({ id: caseData.id, title: $event })"
      @focus="titleIcon = true"
      @blur="titleIcon = false"
    ></v-text-field>
  </v-toolbar-title>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      titleIcon: false,
    }
  },
  methods: {
    ...mapActions({
      updateTitle: 'cases/updateTitle',
    }),
  },
}
</script>