<template>
  <v-icon small @click="deleteCaseData({ id: caseID, index: caseRow })">
    mdi-delete
  </v-icon>
</template>

<script>
import { mapActions } from 'vuex'
import ColumnProps from '~/mixins/ColumnProps.js'

export default {
  mixins: [ColumnProps],
  methods: {
    ...mapActions({
      deleteCaseData: 'cases/deleteCaseData',
    }),
  },
}
</script>