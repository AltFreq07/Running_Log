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
          v-for="(value, name, i) in item"
          :key="i"
          @click="focusInput(name, index, caseData.columns[i].type)"
        >
          <component
            class="d-flex justify-center"
            :is="getColumnComponent(caseData.columns[i].type, name)"
            :array="typeof value === 'object' ? value : []"
            :value="typeof value === 'string' ? value : ''"
            :caseID="caseData.id"
            :caseRow="index"
            :caseHeader="name"
            :ref="name + '-' + index"
          />
        </td>
      </tr>
    </template>
  </v-data-table>
</template>


<script>
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
      screenshots: false,
      screenshotsHeader: '',
    }
  },
  methods: {
    focusInput(name, index, type) {
      if (type === 'Text') this.$refs[name + '-' + index][0].$refs.input.focus()
    },
    pasteEvent(e) {
      if (this.screenshots && this.hoveredRow >= 0) {
        this.$refs[
          this.screenshotsHeader + '-' + this.hoveredRow
        ][0].pasteEvent(e)
      }
    },
  },
}
</script>
