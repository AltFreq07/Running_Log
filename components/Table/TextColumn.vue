<template>
  <v-textarea
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
  </v-textarea>
</template>

<style>
.v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none !important;
}
</style>

<script>
import { mapActions } from 'vuex'
import ColumnProps from '~/mixins/ColumnProps.js'
export default {
  mixins: [ColumnProps],
  data() {
    return {
      focused: false,
    }
  },
  methods: {
    log(e) {
      console.log(e)
    },
    ...mapActions({
      updateCaseData: 'cases/updateCaseData',
    }),
  },
}
</script>