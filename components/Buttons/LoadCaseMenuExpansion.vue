<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, value, i) in getCategories" :key="i">
      <v-expansion-panel-header :expand-icon="mdiChevronDown">
        {{ value }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list>
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
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import GetCategories from '@/mixins/GetCategories'
import mdiChevronDown from '@/mixins/Icons/mdiChevronDown.js'
export default {
  mixins: [GetCategories, mdiChevronDown],
}
</script>