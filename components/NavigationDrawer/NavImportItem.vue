<template>
  <v-list-item link @click="$refs.uploader.click()">
    <v-list-item-icon>
      <v-icon>mdi-file-import</v-icon>
      <input
        v-show="false"
        ref="uploader"
        type="file"
        accept="application/JSON"
        @change="onFileChanged"
      />
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>Import</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    onFileChanged(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result)
        this.importCase(data)
        this.$router.push('/case/' + data.id)
      }
      reader.onerror = (error) => console.log(error)
      reader.readAsText(file)
    },
    ...mapActions({
      importCase: 'cases/importCase',
    }),
  },
}
</script>