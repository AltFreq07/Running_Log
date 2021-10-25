<template>
  <button-icon
    text="New"
    icon="mdi-briefcase-plus"
    color="primary"
    @click="newCase"
  />
</template>

<script>
import ButtonIcon from './ButtonIcon.vue'
import NewCase from '@/mixins/NewCase'

export default {
  mixins: [NewCase],
  components: { ButtonIcon },
}
</script>
