<template>
  <v-data-table
    :headers="headers"
    :items="getColumns(caseData.id)"
    class="elevation-1 mx-2"
    disable-pagination
    :hide-default-footer="true"
  >
    <template #item="{ item, index }">
      <tr :id="'row-' + index">
        <td v-for="(value, i) in headers" :key="i">
          <!-- {{ value.value }} || -->
          <!-- {{ item[value.value] }} ||
          {{ value.text }} -->
          <component
            class="d-flex justify-center"
            :is="getColumnComponent(value.type)"
            :array="
              typeof item[value.value] === 'object' ? item[value.value] : []
            "
            :value="
              typeof item[value.value] === 'string' ? item[value.value] : ''
            "
            :items="headers[i].type === 'List' ? getListItems(value.text) : []"
            :caseID="caseData.id"
            :caseRow="index"
            :caseHeader="value.value"
            :ref="value.value + '-' + index"
            @deleteClicked="deleteColumn({ id: caseData.id, index: index })"
            @updateData="
              updateCaseData({
                id: caseData.id,
                row: index,
                header: value.value,
                data: $event,
              })
            "
            @addListItem="
              addListItem({
                id: caseData.id,
                header: value.value,
                data: $event,
              })
            "
            @removeArrayData="
              removeArrayData({
                id: caseData.id,
                row: index,
                header: value.value,
                data: $event,
              })
            "
            @pushCaseData="
              pushCaseData({
                id: caseData.id,
                row: index,
                header: value.value,
                data: $event,
              })
            "
          />
        </td>
      </tr>
    </template>
  </v-data-table>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import GetColumnComponent from '@/mixins/GetColumnComponent.js'
import CaseDataProp from '@/mixins/CaseDataProp.js'

export default {
  mixins: [GetColumnComponent, CaseDataProp],

  data() {
    return {
      hoveredRow: -1,
      typeList: [
        'Text',
        'DateTime',
        'Actions',
        'List',
        'Checkbox',
        'Screenshots',
      ],
      alignList: ['start', 'center', 'end'],
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'text',
          type: 'Text',
        },
        {
          text: 'Type',
          align: 'center',
          sortable: true,
          value: 'type',
          type: 'List',
        },
        {
          text: 'Sortable',
          align: 'center',
          sortable: true,
          value: 'sortable',
          type: 'Checkbox',
        },
        {
          text: 'Aligned',
          align: 'center',
          sortable: true,
          value: 'align',
          type: 'List',
        },
        {
          text: 'Width',
          align: 'center',
          sortable: true,
          value: 'width',
          type: 'Text',
        },
        {
          text: 'Export',
          align: 'center',
          sortable: true,
          value: 'export',
          type: 'Checkbox',
        },
        {
          text: 'Remove',
          align: 'end',
          sortable: false,
          value: 'remove',
          type: 'Actions',
        },
      ],
    }
  },
  methods: {
    getListItems(name) {
      switch (name) {
        case 'Type':
          return this.typeList
        case 'Aligned':
          return this.alignList
        default:
          return []
      }
    },
    ...mapActions({
      deleteColumn: 'cases/deleteColumn',
    }),
  },
  computed: {
    ...mapGetters({
      getColumns: 'cases/getColumns',
    }),
  },
}
</script>