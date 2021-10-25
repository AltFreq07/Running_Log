<template>
  <v-list dense>
    <v-list-group prepend-icon="mdi-cog" no-action>
      <template v-slot:activator>
        <v-list-item-title>Options</v-list-item-title>
      </template>
      <v-list-item
        @click="
          $vuetify.theme.dark = !$vuetify.theme.dark
          toggleTheme()
        "
      >
        <v-list-item-title
          v-text="$vuetify.theme.dark ? 'Light Mode' : 'Dark Mode'"
        ></v-list-item-title>
        <v-list-item-icon
          ><v-icon>{{
            $vuetify.theme.dark
              ? 'mdi-white-balance-sunny '
              : 'mdi-moon-waning-crescent'
          }}</v-icon></v-list-item-icon
        >
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      toggleTheme: 'settings/toggleTheme',
    }),
  },
}
</script>