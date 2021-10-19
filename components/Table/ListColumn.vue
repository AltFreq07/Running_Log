<template>
  <v-combobox
    :value="value"
    :items="getListItems(caseID, caseHeader)"
    :search-input.sync="search"
    dense
    persistent-hint
    flat
    class="text-body-2 ma-0 pa-0"
    ref="input"
    @input="
      updateCaseData({
        id: caseID,
        row: caseRow,
        header: caseHeader,
        data: $event,
      })
      addListItem({ id: caseID, header: caseHeader, data: $event })
    "
  >
    <template v-slot:item="{ item }">
      {{ item }}
      <v-spacer />
      <v-list-item-action @click.stop>
        <v-btn icon>
          <!-- <v-btn icon @click.stop.prevent="removeDeviceList(item)"> -->
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item-action></template
    >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            No results matching "<strong>{{ search }}</strong
            >". Press <kbd>enter</kbd> to create a new one
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-combobox>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ColumnProps from '~/mixins/ColumnProps.js'

export default {
  mixins: [ColumnProps],
  data() {
    return {
      deviceList: ['Windows 10 Host', 'Kali-Linux VM', 'Windows 10 Malware VM'],
      search: null,
    }
  },
  computed: {
    ...mapGetters({
      getListItems: 'cases/getListItems',
    }),
  },
  methods: {
    ...mapActions({
      addListItem: 'cases/addListItem',
      updateCaseData: 'cases/updateCaseData',
    }),
  },
}
</script>