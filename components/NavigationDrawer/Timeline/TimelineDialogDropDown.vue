<template>
  <v-combobox
    :label="items.length > 0 ? label : error"
    :readonly="items.length === 0"
    :disabled="items.length === 0"
    :error-messages="errorMessages"
    hide-selected
    :items="items"
    :value="value"
    @input="$emit('input', $event)"
    return-object
    dense
    solo
    type="object"
  >
    <template v-slot:selection="{ item }">{{ item.name }}</template>
    <template v-slot:item="{ item }">
      {{ item.name }}
    </template>
  </v-combobox>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: Object,
      default: () => {},
    },
    errorMessages: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: 'No Items Available',
    },
  },
}
</script>
