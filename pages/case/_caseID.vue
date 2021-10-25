<template>
  <div @paste="pasteEvent">
    <div v-if="$fetchState.pending || loading" class="center-page">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <p class="primary-text pt-4 text-center">Loading</p>
    </div>
    <div v-else>
      <toolbar
        :caseData="caseData"
        @navDrawerClicked="$refs.navDrawer.toggleDrawer()"
      />
      <nav-menu ref="navDrawer" :caseData="caseData" />
      <log-table :case-data="caseData" ref="dataTable" />
    </div>
  </div>
</template>

<style>
.center-page {
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>

</style>

<script>
import { mapGetters } from 'vuex'
import LogTable from '../../components/Table/LogTable.vue'
import NavMenu from '../../components/Toolbar/NavMenu.vue'
export default {
  components: { LogTable, NavMenu },
  fetch() {
    this.caseID = this.$route.params.caseID
  },
  data() {
    return {
      caseID: '',
      caseData: {},
      loading: true,
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
    setTimeout(
      function () {
        this.loading = false
      }.bind(this),
      250
    )
  },
}
</script>