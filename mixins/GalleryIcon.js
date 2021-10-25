import ColumnProps from '~/mixins/ColumnProps.js'
export default {
    mixins: [ColumnProps],
    computed: {
        getIcon() {
            switch (this.array.length) {
                case 0:
                    return 'mdi-image-plus'
                case 1:
                    return 'mdi-numeric-1-box'
                case 2:
                    return 'mdi-numeric-2-box-multiple'
                case 3:
                    return 'mdi-numeric-3-box-multiple'
                case 4:
                    return 'mdi-numeric-4-box-multiple'
                case 5:
                    return 'mdi-numeric-5-box-multiple'
                case 6:
                    return 'mdi-numeric-6-box-multiple'
                case 7:
                    return 'mdi-numeric-7-box-multiple'
                case 8:
                    return 'mdi-numeric-8-box-multiple'
                default:
                    return 'mdi-numeric-9-plus-box-multiple'
            }
        },
    },
}