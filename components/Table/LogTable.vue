<template>
  <v-data-table
    :headers="caseData.columns"
    :items="caseData.data"
    class="elevation-1"
    disable-pagination
    :hide-default-footer="true"
  >
    <template #top>
      <v-toolbar flat>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template #foot>
      <log-table-footer :case-data="caseData" />
    </template>

    <template #item="{ item, index }">
      <tr
        :id="'row-' + index"
        @mouseenter="hoveredRow = index"
        @mouseleave="hoveredRow = -1"
      >
        <td
          v-for="(value, i) in caseData.columns"
          :key="i"
          @click="focusInput(value.value, index, value.type)"
        >
          <component
            class="d-flex justify-center"
            :is="getColumnComponent(value.type)"
            :array="
              typeof item[value.value] === 'object' ? item[value.value] : []
            "
            :value="
              typeof item[value.value] === 'string' ? item[value.value] : ''
            "
            :items="
              caseData.columns[i].type === 'List'
                ? getListItems(caseData.id, value.value)
                : []
            "
            :caseID="caseData.id"
            :caseRow="index"
            :caseHeader="value.value"
            :ref="value.value + '-' + index"
            @deleteClicked="deleteCaseData({ id: caseData.id, index: index })"
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
            @removeListItem="
              removeListItem({
                id: caseData.id,
                header: value.value,
                index: $event.index,
                data: $event.data,
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
import { mapActions, mapGetters } from 'vuex'
import LogTableFooter from './LogTableFooter.vue'
import GetColumnComponent from '@/mixins/GetColumnComponent.js'

export default {
  mixins: [GetColumnComponent],
  components: {
    LogTableFooter,
  },
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      hoveredRow: -1,
    }
  },
  methods: {
    focusInput(name, index, type) {
      if (type === 'Text') this.$refs[name + '-' + index][0].$refs.input.focus()
    },
    getScreenshotHeader() {
      for (const col of this.caseData.columns) {
        if (col.type === 'Screenshots') {
          return col.value
        }
      }
      return null
    },
    pasteEvent(e) {
      const header = this.getScreenshotHeader()
      if (header) {
        this.$refs[header + '-' + this.hoveredRow][0].pasteEvent(e)
      }
    },
    ...mapActions({
      deleteCaseData: 'cases/deleteCaseData',
      updateCaseData: 'cases/updateCaseData',
      addListItem: 'cases/addListItem',
      removeListItem: 'cases/removeListItem',
      removeArrayData: 'cases/removeArrayData',
      pushCaseData: 'cases/addArrayData',
    }),
  },
  computed: {
    ...mapGetters({
      getListItems: 'cases/getListItems',
    }),
  },
}
</script>
