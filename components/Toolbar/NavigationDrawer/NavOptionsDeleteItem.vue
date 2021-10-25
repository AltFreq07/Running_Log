<template>
  <v-list-item @click="deleteLog">
    <v-list-item-title class="error--text">Delete Log</v-list-item-title>
    <v-list-item-icon
      ><v-icon color="error">mdi-trash-can</v-icon></v-list-item-icon
    >
  </v-list-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    caseId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {
    deleteLog() {
      console.log('delete', this.caseId)
      this.deleteCase(this.caseId)
      this.$router.push('/')
    },
    ...mapActions({
      deleteCase: 'cases/deleteCase',
    }),
  },
}
</script>