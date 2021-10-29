<template>
  <v-dialog v-model="dialog" max-width="500" max-height="500">
    <v-card>
      <v-card-title> Select a Template </v-card-title>

      <v-card-text>
        <v-list>
          <v-list-item
            v-for="(template, index) in templates"
            :key="index"
            @click="newCase(template.columns)"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ template.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
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
import NewCase from '@/mixins/NewCase'

export default {
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
