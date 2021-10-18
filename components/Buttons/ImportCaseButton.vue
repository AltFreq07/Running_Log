<template>
  <div class="text-center">
    <v-menu offset-y rounded max-height="250px">
      <template #activator="{ on, attrs }">
        <button-icon
          text="Import"
          icon="mdi-briefcase-eye"
          :color="color"
          v-bind="attrs"
          v-on="on"
        />
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in getCases"
          :key="index"
          link
          :to="'/case/' + item.id"
        >
          <v-list-item-title>{{ item.id }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ButtonIcon from './ButtonIcon.vue'

export default {
  components: { ButtonIcon },
  props: {
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters({
      getCases: 'cases/getCases',
    }),
  },
}
</script>