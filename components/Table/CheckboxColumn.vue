<template>
  <v-simple-checkbox input-value="true"></v-simple-checkbox>
  <!-- <v-textarea
    auto-grow
    dense
    flat
    hide-details
    rows="1"
    class="text-body-2 ma-0 pa-0"
    :clearable="focused"
    :value="value"
    ref="input"
    @focus="focused = true"
    @blur="focused = false"
    @input="
      updateCaseData({
        id: caseID,
        row: caseRow,
        header: caseHeader,
        data: $event !== null ? $event : '',
      })
    "
  >
  </v-textarea> -->
</template>

<script>
import ColumnProps from '~/mixins/ColumnProps.js'
export default {
  mixins: [ColumnProps],
  data() {
    return {}
  },
}
</script>