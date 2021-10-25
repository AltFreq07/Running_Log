import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            getCases: 'cases/getCases',
        }),
        getCategories() {
            const categories = {}
            for (const item of this.getCases) {
                let category = item.category
                if (category === undefined || category === '')
                    category = 'Uncategorised'
                if (categories[category] === undefined) {
                    categories[category] = [item]
                } else {
                    categories[category].push(item)
                }
            }
            return categories
        },
    }
}