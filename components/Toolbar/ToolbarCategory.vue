<template>
  <v-text-field
    class="text-caption pl-1"
    style="width: 381px"
    :value="caseData === undefined ? '' : caseData.category"
    placeholder="Category"
    :hide-details="true"
    :append-icon="categoryIcon ? 'mdi-pencil' : ''"
    @input="updateCategory({ id: caseData.id, category: $event })"
    @focus="categoryIcon = true"
    @blur="categoryIcon = false"
  ></v-text-field>
</template>

<script>
import { mapActions } from 'vuex'
export default {
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