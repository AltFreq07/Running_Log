import ActionsColumn from '@/components/Table/ActionsColumn.vue'
import DateTimeColumn from '@/components/Table/DateTimeColumn.vue'
import ListColumn from '@/components/Table/ListColumn.vue'
import TextColumn from '@/components/Table/TextColumn.vue'
import ScreenshotColumn from '@/components/Table/ScreenshotColumn/ScreenshotColumn.vue'
import CheckboxColumn from '@/components/Table/CheckboxColumn.vue'

export default {
    components: {
        DateTimeColumn,
        TextColumn,
        ActionsColumn,
        ListColumn,
        ScreenshotColumn,
        CheckboxColumn
    },
    methods: {
        getColumnComponent(type, header) {
            switch (type) {
                case 'Text': {
                    return TextColumn
                }
                case 'DateTime': {
                    return DateTimeColumn
                }
                case 'Actions': {
                    return ActionsColumn
                }
                case 'List': {
                    return ListColumn
                }
                case 'Checkbox': {
                    return CheckboxColumn
                }
                case 'Screenshots': {
                    return ScreenshotColumn
                }
                default: {
                    return TextColumn
                }
            }
        },
    },
}