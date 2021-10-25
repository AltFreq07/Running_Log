import { v4 as uuidv4 } from 'uuid'
import { mapActions, mapGetters } from 'vuex'
export default {
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
                columns: this.defaultColumns,
                title: '',
                category: '',
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