<template>
  <v-list-item link @click="newCase">
    <v-list-item-icon>
      <v-icon>mdi-briefcase-plus</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>New</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import NewCase from '@/mixins/NewCase'
export default {
  mixins: [NewCase],
}
</script>