<template>
  <div class="text-center">
    <v-menu offset-y rounded max-height="250px">
      <template #activator="{ on, attrs }">
        <button-icon
          text="Load"
          icon="mdi-briefcase-eye"
          :color="color"
          v-bind="attrs"
          v-on="on"
          @click="log"
        />
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in getCases"
          :key="index"
          link
          :to="'/case/' + item.id"
        >
          <v-list-item-title>{{
            item.title === '' ? item.id : item.title
          }}</v-list-item-title>
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
  methods: {
    log() {
      console.log(this.getCases)
    },
  },
  computed: {
    ...mapGetters({
      getCases: 'cases/getCases',
    }),
  },
}
</script>