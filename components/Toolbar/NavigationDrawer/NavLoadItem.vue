<template>
  <v-list-group prepend-icon="mdi-briefcase-eye">
    <template v-slot:activator>
      <v-list-item-title>Load</v-list-item-title>
    </template>

    <v-list-group
      no-action
      sub-group
      v-for="(item, value, i) in getCategories"
      :key="i"
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>{{ value }}</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item
        v-for="(data, index) in item"
        :key="index"
        link
        :to="'/case/' + data.id"
      >
        <v-list-item-title>{{
          data.title === '' ? data.id : data.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list-group>
</template>

<script>
import GetCategories from '@/mixins/GetCategories'
export default {
  mixins: [GetCategories],
}
</script>