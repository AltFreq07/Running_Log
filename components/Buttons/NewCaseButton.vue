<template>
  <button-icon
    text="New"
    icon="mdi-briefcase-plus"
    :color="color"
    @click="newCase"
  />
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { mapActions, mapGetters } from 'vuex'
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
      defaultColumns: 'defaults/getDefaultColumns',
    }),
  },
  methods: {
    newCase() {
      const uuid = uuidv4()
      this.createCase({
        id: uuid,
        // TODO default columns editable
        columns: this.defaultColumns,
        title: '',
        lists: {},
        data: [],
      })
      this.$router.push('/case/' + uuid)
    },
    ...mapActions({
      createCase: 'cases/createCase',
    }),
  },
}
</script>
