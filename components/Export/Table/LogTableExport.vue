<template>
  <v-data-table
    :headers="columns"
    :items="caseData.data"
    class="elevation-1 mt-10"
    disable-pagination
    :hide-default-footer="true"
  >
    <template #top>
      <v-toolbar flat>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>

    <template #item="{ item, index }">
      <tr :id="'row-' + index">
        <td v-for="(value, name, i) in getFilteredItem(item)" :key="i">
          <component
            :is="getColumnComponent(caseData.columns[i].type)"
            :array="typeof value === 'object' ? value : []"
            :value="typeof value === 'string' ? value : ''"
          />
        </td>
      </tr>
    </template>
  </v-data-table>
</template>


<script>
import DisplayColumn from './DisplayColumn.vue'
import GalleryColumn from './GalleryColumn/GalleryColumn.vue'
export default {
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
    getFilteredItem(item) {
      if (item === undefined) return []
      const cItem = { ...item }
      for (const rem of this.caseData.columns.filter(
        (col) => col.export === false
      )) {
        delete cItem[rem.value]
      }
      return cItem
    },
  },
  computed: {
    columns() {
      if (this.caseData.columns === undefined) return []
      return this.caseData.columns.filter((col) => col.export === true)
    },
  },
}
</script>
