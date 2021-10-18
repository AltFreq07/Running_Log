<template>
  <div class="text-center">
    <v-menu
      open-on-hover
      :offset-y="true"
      :close-on-click="false"
      :close-on-content-click="false"
    >
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on"
          >Options &nbsp;<v-icon>mdi-cog</v-icon></v-btn
        >
      </template>

      <v-list>
        <theme-change />
      </v-list>
    </v-menu>
  </div>
</template>
<script>
import ThemeChange from './ThemeChange.vue'

export default {
  components: { ThemeChange },
}
</script>