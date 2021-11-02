<template>
  <v-btn
    icon
    @click="
      $vuetify.theme.dark = !$vuetify.theme.dark
      toggleTheme()
    "
  >
    <v-icon>{{
      $vuetify.theme.dark ? mdiWhiteBalanceSunny : mdiMoonWaningCrescent
    }}</v-icon>
  </v-btn>
</template>

<script>
import ThemeToggle from '@/mixins/ThemeToggle.js'
import mdiWhiteBalanceSunny from '@/mixins/Icons/mdiWhiteBalanceSunny.js'
import mdiMoonWaningCrescent from '@/mixins/Icons/mdiMoonWaningCrescent.js'
export default {
  mixins: [ThemeToggle, mdiWhiteBalanceSunny, mdiMoonWaningCrescent],
}
</script>