<template>
  <div class="text-center">
    <button-icon
      text="Import"
      icon="mdi-file-import"
      color="primary"
      @click="$refs.uploader.click()"
    />
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
import ButtonIcon from './ButtonIcon.vue'
export default {
  components: { ButtonIcon },
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