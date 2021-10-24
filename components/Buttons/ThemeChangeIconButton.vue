<template>
  <v-btn
    icon
    @click="
      $vuetify.theme.dark = !$vuetify.theme.dark
      toggleTheme()
    "
  >
    <v-icon>{{
      $vuetify.theme.dark
        ? 'mdi-white-balance-sunny '
        : 'mdi-moon-waning-crescent'
    }}</v-icon>
  </v-btn>
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