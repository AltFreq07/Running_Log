<template>
  <div>
    <span
      v-for="(text, index) in value.split('\n')"
      :key="index"
      class="text-body-2 ma-0 pa-0 text-no-wrap"
      >{{ text }}<br
    /></span>
  </div>
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
