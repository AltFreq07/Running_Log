<template>
  <v-snackbar v-model="snackbar" timeout="2000">
    Highlight the row and paste your image file or screenshot.
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>


<script>
export default {
  data() {
    return {
      snackbar: false,
    }
  },
}
</script>