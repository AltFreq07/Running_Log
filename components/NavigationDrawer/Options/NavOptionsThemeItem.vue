<template>
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
        $vuetify.theme.dark ? mdiWhiteBalanceSunny : mdiMoonWaningCrescent
      }}</v-icon></v-list-item-icon
    >
  </v-list-item>
</template>

<script>
import { mapActions } from 'vuex'
import mdiWhiteBalanceSunny from '@/mixins/Icons/mdiWhiteBalanceSunny.js'
import mdiMoonWaningCrescent from '@/mixins/Icons/mdiMoonWaningCrescent.js'
export default {
  mixins: [mdiWhiteBalanceSunny, mdiMoonWaningCrescent],
  methods: {
    ...mapActions({
      toggleTheme: 'settings/toggleTheme',
    }),
  },
}
</script>