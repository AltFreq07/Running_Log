<template>
  <v-list dense class="listscroll">
    <v-list-item-group color="primary">
      <v-list-item
        v-for="(item, i) in cases"
        :key="i"
        link
        :to="'case/' + item.id"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.id }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  props: {
    cases: {
      type: Array,
      default: () => [],
    },
  },
}
</script>


<style>
.listscroll {
  max-height: 300px; /* or any height you want */
  overflow-y: auto;
}
</style>