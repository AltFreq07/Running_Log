<template>
  <div>
    <button-icon
      text="New"
      icon="mdi-briefcase-plus"
      color="primary"
      @click="$refs.templates.dialog = true"
    />
    <template-dialog ref="templates" />
  </div>
</template>

<script>
import ButtonIcon from './ButtonIcon.vue'
import TemplateDialog from './TemplateDialog.vue'

export default {
  components: { ButtonIcon, TemplateDialog },
}
</script>
