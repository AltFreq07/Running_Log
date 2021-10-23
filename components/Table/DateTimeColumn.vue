<template>
  <date-picker
    :value="getDate(value)"
    value-type="date"
    type="datetime"
    format="DD-MMM-YY HH:mm:ss"
    class="d-flex justify-center"
    @input="
      updateCaseData({
        id: caseID,
        row: caseRow,
        header: caseHeader,
        data:
          $event !== null
            ? $event.toJSON()
            : new Date('2021-01-01T00:00:00.000').toJSON(),
      })
    "
  >
  </date-picker>
</template>

<style>
.mx-input:focus {
  border-color: var(--v-primary-base);
  border-width: 2px;
}
.mx-input {
  background-color: inherit;
  color: var(--v-primary-text);
  border-width: 0px;
  caret-color: var(--v-primary-base);
}
.mx-icon-calendar,
.mx-icon-clear,
.mx-icon-clear:hover {
  color: var(--v-primary-text);
}

.mx-datepicker {
  width: 165px;
}
</style>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import { mapActions } from 'vuex'
import ColumnProps from '~/mixins/ColumnProps.js'

export default {
  components: { DatePicker },
  mixins: [ColumnProps],
  methods: {
    getDate(dateString) {
      return new Date(dateString)
    },
    ...mapActions({
      updateCaseData: 'cases/updateCaseData',
    }),
  },
}
</script>