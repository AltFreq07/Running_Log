export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        array: {
            type: Array,
            default: () => []
        },
        items: {
            type: Array,
            default: () => []
        },
        bool: {
            type: Boolean,
            default: false
        }
    },
}