<template>
  <div class="text-center">
    <v-menu offset-y rounded max-height="250px" :close-on-content-click="false">
      <template #activator="{ on, attrs }">
        <button-icon
          text="Load"
          icon="mdi-briefcase-eye"
          color="primary"
          v-bind="attrs"
          v-on="on"
        />
      </template>
      <load-case-menu-expansion />
    </v-menu>
  </div>
</template>

<script>
import ButtonIcon from './ButtonIcon.vue'
import LoadCaseMenuExpansion from './LoadCaseMenuExpansion.vue'
export default {
  components: { ButtonIcon, LoadCaseMenuExpansion },
}
</script>