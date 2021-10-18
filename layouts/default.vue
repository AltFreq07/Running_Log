<template>
  <v-app :dark="getTheme">
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
}
</style>