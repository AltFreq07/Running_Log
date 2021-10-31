<template>
  <v-dialog v-model="dialog" max-width="500" max-height="500">
    <v-card>
      <v-card-title> Load </v-card-title>

      <v-card-text>
        <load-case-menu-expansion />
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import LoadCaseMenuExpansion from './LoadCaseMenuExpansion.vue'
import NewCase from '@/mixins/NewCase'

export default {
  components: { LoadCaseMenuExpansion },
  mixins: [NewCase],
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    ...mapGetters({
      templates: 'templates/getTemplates',
    }),
  },
}
</script>
