export default {
    methods: {
        getTypeDefault(datatype) {
            switch (datatype) {
                case 'DateTime': {
                    const now = new Date()
                    now.setHours(now.getHours() + (now.getTimezoneOffset() / 60) * -1)
                    return now.toJSON().slice(0, -5)
                }
                case ('Text', 'List'): {
                    return ''
                }
                case 'Screenshots': {
                    return []
                }
                default:
                    return ''
            }
        },
        getDefaultData(data) {
            const empty = {}
            for (const col of data.columns) {
                empty[col.value] = this.getTypeDefault(col.type)
            }
            return empty
        }
    }
}