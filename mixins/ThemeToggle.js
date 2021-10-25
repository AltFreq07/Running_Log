import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions({
            toggleTheme: 'settings/toggleTheme',
        }),
    },
}