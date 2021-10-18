<template>
  <v-toolbar-title
    ><v-text-field
      class="text-h4"
      :value="title"
      placeholder="Enter a title"
      :hide-details="true"
      :append-icon="titleIcon ? 'mdi-pencil' : ''"
      @input="updateTitle({ id: caseId, title: $event })"
      @focus="titleIcon = true"
      @blur="titleIcon = false"
    ></v-text-field>
  </v-toolbar-title>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    caseId: {
      type: String,
      default: '',
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