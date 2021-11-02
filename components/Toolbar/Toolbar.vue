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
    <v-app-bar-nav-icon @click="$emit('navDrawerClicked')"
      ><template #default>
        <v-icon>{{ mdiMenu }} </v-icon>
      </template></v-app-bar-nav-icon
    >
  </v-app-bar>
</template>


<script>
import CaseDataProp from '@/mixins/CaseDataProp.js'
import mdiMenu from '@/mixins/Icons/mdiMenu.js'
export default {
  mixins: [CaseDataProp, mdiMenu],
}
</script>