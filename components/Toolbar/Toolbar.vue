<template>
  <v-app-bar app>
    <div style="width: 20px"></div>

    <v-spacer />
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="auto">
          <toolbar-title :case-data="caseData" />
        </v-col>
      </v-row>
      <v-row no-gutters justify="center">
        <v-col cols="auto">
          <toolbar-category :case-data="caseData" />
        </v-col>
      </v-row>
    </v-container>
    <v-spacer />
    <v-app-bar-nav-icon @click="$emit('navDrawerClicked')" />
    <!-- <new-case-button />
    <load-case-button />
    <export-case-button :case-data="caseData" />
    <options-menu /> -->
  </v-app-bar>
</template>


<script>
// import LoadCaseButton from '../../components/Buttons/LoadCaseButton.vue'
// import NewCaseButton from '../../components/Buttons/NewCaseButton.vue'
// import ExportCaseButton from '../../components/Buttons/ExportCaseButton.vue'
// import OptionsMenu from './OptionsMenu/OptionsMenu.vue'
export default {
  components: {
    // NewCaseButton,
    // LoadCaseButton,
    // ExportCaseButton,
    // OptionsMenu,
  },
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>