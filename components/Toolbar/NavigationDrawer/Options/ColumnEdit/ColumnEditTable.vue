<template>
  <v-data-table
    :headers="headers"
    :items="getColumns(caseId)"
    class="elevation-1 mx-2"
    disable-pagination
    :hide-default-footer="true"
  >
  </v-data-table>
</template>
<script>
import { mapGetters } from 'vuex'
import GetColumnComponent from '@/mixins/GetColumnComponent.js'
export default {
  mixins: [GetColumnComponent],
  props: {
    caseId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      hoveredRow: -1,
      headers: [
        { text: 'Name', align: 'start', sortable: true, value: 'text' },
        { text: 'Type', align: 'center', sortable: true, value: 'type' },
        {
          text: 'Sortable',
          align: 'center',
          sortable: true,
          value: 'sortable',
        },
        { text: 'Aligned', align: 'center', sortable: true, value: 'align' },
        { text: 'Width', align: 'center', sortable: true, value: 'width' },
        { text: 'Export', align: 'center', sortable: true, value: 'export' },
        { text: 'Remove', align: 'end', sortable: false, value: 'remove' },
      ],
    }
  },
  computed: {
    ...mapGetters({
      getColumns: 'cases/getColumns',
    }),
  },
}
</script>