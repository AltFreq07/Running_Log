<template>
  <v-dialog v-model="dialog" max-width="350">
    <v-card>
      <v-card-title class="text-h5"> Delete Log </v-card-title>

      <v-card-text class="font-weight-bold">
        Are you sure you want to delete this log?
      </v-card-text>
      <v-card-text class="warning--text">
        This action is irreversible and will result in loss of data if not
        correctly exported.
      </v-card-text>

      <v-card-actions>
        <v-btn color="success" text @click="dialog = false"> Disagree </v-btn>
        <v-spacer />
        <v-btn
          color="error"
          text
          @click="
            dialog = false
            deleteLog()
          "
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
    return {
      dialog: false,
    }
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