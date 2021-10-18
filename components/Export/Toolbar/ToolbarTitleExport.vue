<template>
  <v-toolbar-title
    ><span class="text-h4">{{ title }}</span>
  </v-toolbar-title>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>