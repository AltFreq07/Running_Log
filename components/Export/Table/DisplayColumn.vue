<template>
  <span class="text-body-2 ma-0 pa-0 text-no-wrap">{{ value }}</span>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
}
</script>
