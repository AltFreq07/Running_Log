<template>
  <v-data-table
    :headers="caseData.columns"
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
import ActionsColumn from './ActionsColumn.vue'
import DateTimeColumn from './DateTimeColumn.vue'
import ListColumn from './ListColumn.vue'
import LogTableFooter from './LogTableFooter.vue'
import TextColumn from './TextColumn.vue'
import ScreenshotColumn from './ScreenshotColumn/ScreenshotColumn.vue'

export default {
  components: {
    LogTableFooter,
    DateTimeColumn,
    TextColumn,
    ActionsColumn,
    ListColumn,
    ScreenshotColumn,
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
    getColumnComponent(type, header) {
      switch (type) {
        case 'Text': {
          return TextColumn
        }
        case 'DateTime': {
          return DateTimeColumn
        }
        case 'Actions': {
          return ActionsColumn
        }
        case 'List': {
          return ListColumn
        }
        case 'Screenshots': {
          this.screenshots = true
          this.screenshotsHeader = header
          return ScreenshotColumn
        }
        default: {
          return TextColumn
        }
      }
    },
  },
}
</script>
