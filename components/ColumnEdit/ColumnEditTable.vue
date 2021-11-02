<template>
  <v-data-table
    :headers="headers"
    :items="getColumns(caseData.id)"
    class="elevation-1 mx-2"
    disable-pagination
    :hide-default-footer="true"
    :header-props="{ sortIcon: mdiArrowUp }"
  >
    <template #foot>
      <tr>
        <td :colspan="headers.length + 1">
          <v-divider width="100%" />
          <v-card class="pa-0 ma-0" height="100%" width="100%">
            <v-row class="py-2 ma-0" justify="center">
              <v-btn
                elevation="2"
                icon
                large
                @click="
                  addColumn({ id: caseData.id, data: { ...defaultColumn } })
                "
                ><v-icon>{{ mdiPlus }}</v-icon></v-btn
              >
            </v-row>
          </v-card>
        </td>
      </tr>
    </template>
    <template #item="{ item, index }">
      <tr
        :id="'row-' + index"
        @dragstart="draggedElement = index"
        @dragover="$event.preventDefault()"
        @dragenter="$event.preventDefault()"
        @drop="
          moveColumns({ id: caseData.id, from: draggedElement, to: index })
          draggedElement = -1
        "
        draggable
      >
        <td v-for="(value, i) in headers" :key="i">
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
            :bool="
              typeof item[value.value] === 'boolean' ? item[value.value] : ''
            "
            :caseID="caseData.id"
            :caseRow="index"
            :caseHeader="value.value"
            :showAdd="false"
            :ref="value.value + '-' + index"
            @deleteClicked="
              deleteColumn({
                id: caseData.id,
                index: index,
                header: item.value,
                type: item.type,
              })
            "
            @updateData="
              updateColumnData({
                id: caseData.id,
                row: index,
                header: value.value,
                data: $event,
              })
            "
          />
        </td>
        <td>
          <v-icon>{{ mdiDragVertical }}</v-icon>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import GetColumnComponent from '@/mixins/GetColumnComponent.js'
import mdiPlus from '@/mixins/Icons/mdiPlus.js'
import mdiDragVertical from '@/mixins/Icons/mdiDragVertical.js'
import CaseDataProp from '@/mixins/CaseDataProp.js'
import mdiArrowUp from '@/mixins/Icons/mdiArrowUp.js'

export default {
  mixins: [
    GetColumnComponent,
    CaseDataProp,
    mdiPlus,
    mdiDragVertical,
    mdiArrowUp,
  ],
  data() {
    return {
      hoveredRow: -1,
      draggedElement: -1,
      typeList: [
        'Text',
        'DateTime',
        'Actions',
        'List',
        'Checkbox',
        'Screenshots',
      ],
      alignList: ['start', 'center', 'end'],
      defaultColumn: {
        align: '',
        export: true,
        sortable: true,
        text: '',
        type: '',
        value: '',
        width: '',
      },
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
          text: 'Value',
          align: 'start',
          sortable: true,
          value: 'value',
          type: 'Text',
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
      addColumn: 'cases/addColumn',
      updateColumnData: 'cases/updateColumnData',
      moveColumns: 'cases/moveColumns',
    }),
  },
  computed: {
    ...mapGetters({
      getColumns: 'cases/getColumns',
    }),
  },
}
</script>