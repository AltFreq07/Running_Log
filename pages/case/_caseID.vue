<template>
  <div @paste="pasteEvent">
    <page-preload v-if="$fetchState.pending || loading" class="center-page" />
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

<script>
import { mapGetters } from 'vuex'
import LogTable from '../../components/Table/LogTable.vue'
import NavMenu from '../../components/Toolbar/NavigationDrawer/NavMenu.vue'
import PagePreload from '@/components/Loader/PagePreload.vue'
export default {
  components: { LogTable, NavMenu, PagePreload },
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