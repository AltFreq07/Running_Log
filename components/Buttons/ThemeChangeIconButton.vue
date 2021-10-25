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
import ThemeToggle from '@/mixins/ThemeToggle.js'
export default {
  mixins: [ThemeToggle],
}
</script>