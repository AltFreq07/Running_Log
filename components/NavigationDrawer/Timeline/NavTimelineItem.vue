<template>
  <v-list-group
    :prepend-icon="mdiTimelineClock"
    :append-icon="mdiChevronDown"
    no-action
  >
    <timeline-dialog ref="timelineDialog" :case-data="caseData" />
    <template v-slot:activator>
      <v-list-item-title>Timeline</v-list-item-title>
    </template>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      link
      @click="getExportData(item)"
    >
      <v-list-item-title>{{ item }}</v-list-item-title>
      <v-list-item-icon>
        <v-icon>{{ getIcon(item) }}</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list-group>
</template>

<script>
import TimelineDialog from './TimelineDialog.vue'
import mdiTimelineClock from '@/mixins/Icons/mdiTimelineClock.js'
import mdiTimelineClockOutline from '@/mixins/Icons/mdiTimelineClockOutline.js'
import mdiFilePdfBox from '@/mixins/Icons/mdiFilePdfBox.js'
import mdiImage from '@/mixins/Icons/mdiImage.js'
import mdiChevronDown from '@/mixins/Icons/mdiChevronDown.js'
export default {
  mixins: [
    mdiTimelineClock,
    mdiFilePdfBox,
    mdiTimelineClockOutline,
    mdiImage,
    mdiChevronDown,
  ],
  components: { TimelineDialog },
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      items: ['Preview', 'PDF', 'Image'],
    }
  },
  methods: {
    getIcon(title) {
      switch (title) {
        case 'Preview':
          return this.mdiTimelineClockOutline
        case 'PDF':
          return this.mdiFilePdfBox
        case 'Image':
          return this.mdiImage
      }
    },
    getExportData(string) {
      this.$refs.timelineDialog.type = string
      this.$refs.timelineDialog.dialog = true
    },
  },
}
</script>