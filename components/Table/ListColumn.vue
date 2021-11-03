<template>
  <v-combobox
    :value="value"
    :items="items"
    dense
    persistent-hint
    flat
    class="text-body-2 ma-0 pt-0"
    @input="
      $emit('updateData', $event)
      $emit('addListItem', $event)
    "
  >
    <template v-slot:item="{ item }">
      {{ item }}
      <v-spacer />
      <v-list-item-action
        v-if="showAdd"
        @click="
          $emit('removeListItem', { index: items.indexOf(item), data: item })
        "
      >
        <v-btn icon>
          <v-icon>{{ mdiClose }}</v-icon>
        </v-btn>
      </v-list-item-action></template
    >
    <template v-slot:no-data v-if="showAdd">
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
import ColumnProps from '~/mixins/ColumnProps.js'
import mdiClose from '@/mixins/Icons/mdiClose.js'

export default {
  mixins: [ColumnProps, mdiClose],
  props: {
    showAdd: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      search: null,
    }
  },
}
</script>