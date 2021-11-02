<template>
  <v-text-field
    class="text-caption pl-1 centered-input"
    style="width: 381px"
    :value="caseData === undefined ? '' : caseData.category"
    placeholder="Category"
    :hide-details="true"
    :append-icon="categoryIcon ? mdiPencil : ''"
    @input="updateCategory({ id: caseData.id, category: $event })"
    @focus="categoryIcon = true"
    @blur="categoryIcon = false"
  ></v-text-field>
</template>

<script>
import { mapActions } from 'vuex'
import mdiPencil from '@/mixins/Icons/mdiPencil.js'
export default {
  mixins: [mdiPencil],
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      categoryIcon: false,
    }
  },
  methods: {
    ...mapActions({
      updateCategory: 'cases/updateCategory',
    }),
  },
}
</script>

<style scoped>
.centered-input >>> input {
  text-align: center;
}
</style>