import { v4 as uuidv4 } from 'uuid'
import { mapActions } from 'vuex'
export default {
    methods: {
        newCase(columns) {
            const uuid = uuidv4()
            this.createCase({
                id: uuid,
                columns: JSON.parse(JSON.stringify(columns)),
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