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
      this.$router.push('/')
      setTimeout(
        function () {
          this.deleteCase(this.caseId)
        }.bind(this),
        0
      )
    },
    ...mapActions({
      deleteCase: 'cases/deleteCase',
    }),
  },
}
</script>