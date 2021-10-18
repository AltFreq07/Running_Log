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
        caseID: {
            type: String,
            default: '',
        },
        caseRow: {
            type: Number,
            default: 0,
        },
        caseHeader: {
            type: String,
            default: '',
        },
    },
}