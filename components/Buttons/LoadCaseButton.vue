<template>
  <div class="text-center">
    <v-menu offset-y rounded max-height="250px" :close-on-content-click="false">
      <template #activator="{ on, attrs }">
        <button-icon
          text="Load"
          icon="mdi-briefcase-eye"
          :color="color"
          v-bind="attrs"
          v-on="on"
        />
      </template>
      <v-expansion-panels style="width: fit-content">
        <v-expansion-panel v-for="(item, value, i) in getCategories" :key="i">
          <v-expansion-panel-header>
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
    </v-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ButtonIcon from './ButtonIcon.vue'

export default {
  components: { ButtonIcon },
  props: {
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters({
      getCases: 'cases/getCases',
    }),
    getCategories() {
      const categories = {}
      for (const item of this.getCases) {
        let category = item.category
        if (category === undefined || category === '')
          category = 'Uncategorised'
        if (categories[category] === undefined) {
          categories[category] = [item]
        } else {
          categories[category].push(item)
        }
      }
      return categories
    },
  },
}
</script>