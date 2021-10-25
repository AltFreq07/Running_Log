<template>
  <div>
    <v-progress-circular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <p class="primary-text pt-4 text-center">Loading</p>
  </div>
</template>

<style>
.center-page {
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>