<template>
  <v-data-table
    :headers="caseData.columns.filter((col) => col.export === true)"
    :items="caseData.data"
    class="elevation-1 mt-10"
    disable-pagination
    :hide-default-footer="true"
    :header-props="{ sortIcon: mdiArrowUp }"
  >
    <template #top>
      <v-toolbar flat>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>

    <template #item="{ item, index }">
      <tr :id="'row-' + index">
        <td
          v-for="(value, i) in caseData.columns.filter(
            (col) => col.export === true
          )"
          :key="i"
        >
          <component
            :is="getColumnComponent(value.type)"
            :array="
              typeof item[value.value] === 'object' ? item[value.value] : []
            "
            :value="
              typeof item[value.value] === 'string' ? item[value.value] : ''
            "
            :caseRow="index"
            :caseHeader="value.value"
          />
        </td>
      </tr>
    </template>
  </v-data-table>
</template>


<script>
import DisplayColumn from './DisplayColumn.vue'
import GalleryColumn from './GalleryColumn/GalleryColumn.vue'
import mdiArrowUp from '@/mixins/Icons/mdiArrowUp.js'
export default {
  mixins: [mdiArrowUp],
  components: {
    DisplayColumn,
    GalleryColumn,
  },
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getColumnComponent(type) {
      switch (type) {
        case 'Screenshots': {
          return GalleryColumn
        }
        default: {
          return DisplayColumn
        }
      }
    },
  },
}
</script>
