<template>
  <div class="text-center">
    <button-icon
      text="Load"
      icon="mdi-briefcase-eye"
      color="primary"
      @click="$refs.loadDialog.dialog = true"
    />
    <load-dialog ref="loadDialog" />
  </div>
</template>

<script>
import ButtonIcon from './ButtonIcon.vue'
import LoadDialog from './LoadDialog.vue'
export default {
  components: { ButtonIcon, LoadDialog },
}
</script>