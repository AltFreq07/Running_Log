<template>
  <v-btn :color="color" class="mx-2" @click="$emit('click', $event)"
    >{{ text }} &nbsp;<v-icon>{{ icon }}</v-icon></v-btn
  >
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
}
</script>
