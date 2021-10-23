<template>
  <v-app>
    <v-main>
      <v-container fluid class="mt-5">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <v-spacer /><span>Shaw &copy; {{ new Date().getFullYear() }}</span
      ><v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getTheme: 'settings/getTheme',
    }),
  },
  mounted() {
    console.log(this.getTheme, 'THEME')
    console.log(this.$store.getters['settings/getTheme'], 'THEME2')
    if (this.getTheme === true) {
      return (this.$vuetify.theme.dark = true)
    } else {
      return (this.$vuetify.theme.dark = false)
    }
  },
}
</script>


<style>
html {
  overflow-y: auto !important;
  overscroll-behavior-y: none;
  overflow-x: auto !important;
  overscroll-behavior-x: none;
}
</style>