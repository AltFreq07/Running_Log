<template>
  <v-text-field hide-details class="ma-0 pa-0" solo readonly :value="label">
    <template v-slot:append>
      <v-menu
        v-model="menu"
        top
        nudge-bottom="105"
        nudge-left="16"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on }">
          <div :style="swatchStyle" v-on="on" />
        </template>
        <v-card>
          <v-card-text class="pa-0">
            <v-color-picker
              :value="value"
              @input="$emit('input', $event)"
              flat
            />
          </v-card-text>
        </v-card>
      </v-menu>
    </template>
  </v-text-field>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      menu: false,
    }
  },
  mounted() {
    if (this.defaultColor !== '') this.color = this.defaultColor
  },
  computed: {
    swatchStyle() {
      const { value, menu } = this
      return {
        backgroundColor: value,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out',
      }
    },
  },
}
</script>