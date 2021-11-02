<template>
  <div class="text-center">
    <v-btn color="primary" class="mx-2" @click="$refs.uploader.click()"
      >Import &nbsp;<v-icon>{{ mdiFileImport }}</v-icon></v-btn
    >
    <input
      v-show="false"
      ref="uploader"
      type="file"
      accept="application/JSON"
      @change="onFileChanged"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import mdiFileImport from '@/mixins/Icons/mdiFileImport.js'
export default {
  mixins: [mdiFileImport],
  methods: {
    onFileChanged(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        const data = JSON.parse(event.target.result)
        console.log(data)
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