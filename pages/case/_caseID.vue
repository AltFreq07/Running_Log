<template>
  <div @paste="pasteEvent">
    <toolbar :case-id="caseID" :title="caseData.title" :caseData="caseData" />
    <log-table :case-data="caseData" ref="dataTable" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LogTable from '../../components/Table/LogTable.vue'
export default {
  components: { LogTable },
  asyncData({ params }) {
    const caseID = params.caseID // When calling /abc the slug will be "abc"
    return { caseID }
  },
  data() {
    return {
      caseData: {},
    }
  },
  methods: {
    pasteEvent(e) {
      this.$refs.dataTable.pasteEvent(e)
    },
  },
  computed: {
    ...mapGetters({
      getCase: 'cases/getCase',
    }),
  },
  mounted() {
    this.caseData = this.getCase(this.caseID)
  },
}
</script>