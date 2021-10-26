import ActionsColumn from '@/components/Table/ActionsColumn.vue'
import DateTimeColumn from '@/components/Table/DateTimeColumn.vue'
import ListColumn from '@/components/Table/ListColumn.vue'
import TextColumn from '@/components/Table/TextColumn.vue'
import ScreenshotColumn from '@/components/Table/ScreenshotColumn/ScreenshotColumn.vue'

export default {
    components: {
        DateTimeColumn,
        TextColumn,
        ActionsColumn,
        ListColumn,
        ScreenshotColumn,
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
                case 'Screenshots': {
                    this.screenshots = true
                    this.screenshotsHeader = header
                    return ScreenshotColumn
                }
                default: {
                    return TextColumn
                }
            }
        },
    },
}