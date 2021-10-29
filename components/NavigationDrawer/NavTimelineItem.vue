<template>
  <v-list-group prepend-icon="mdi-timeline-clock" no-action>
    <timeline-dialog ref="timelineDialog" :case-data="caseData" />
    <template v-slot:activator>
      <v-list-item-title>Timeline</v-list-item-title>
    </template>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      link
      @click="getExportData(item.title)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list-group>
</template>

<script>
import TimelineDialog from './TimelineDialog.vue'
export default {
  components: { TimelineDialog },
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      items: [
        { title: 'Preview', icon: 'mdi-timeline-clock-outline' },
        { title: 'PDF', icon: 'mdi-file-pdf-box' },
        { title: 'Image', icon: 'mdi-image' },
      ],
    }
  },
  methods: {
    getExportData(string) {
      this.$refs.timelineDialog.type = string
      this.$refs.timelineDialog.dialog = true
    },
  },
}
</script>