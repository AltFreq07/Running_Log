import ColumnProps from '~/mixins/ColumnProps.js'
import mdiImagePlus from '@/mixins/Icons/mdiImagePlus'
import mdiNumeric1Box from '@/mixins/Icons/mdiNumeric1Box'
import mdiNumeric2BoxMultiple from '@/mixins/Icons/mdiNumeric2BoxMultiple'
import mdiNumeric3BoxMultiple from '@/mixins/Icons/mdiNumeric3BoxMultiple'
import mdiNumeric4BoxMultiple from '@/mixins/Icons/mdiNumeric4BoxMultiple'
import mdiNumeric5BoxMultiple from '@/mixins/Icons/mdiNumeric5BoxMultiple'
import mdiNumeric6BoxMultiple from '@/mixins/Icons/mdiNumeric6BoxMultiple'
import mdiNumeric7BoxMultiple from '@/mixins/Icons/mdiNumeric7BoxMultiple'
import mdiNumeric8BoxMultiple from '@/mixins/Icons/mdiNumeric8BoxMultiple'
import mdiNumeric9BoxMultiple from '@/mixins/Icons/mdiNumeric9BoxMultiple'
import mdiNumeric9PlusBoxMultiple from '@/mixins/Icons/mdiNumeric9PlusBoxMultiple'

export default {
    mixins: [ColumnProps, mdiImagePlus, mdiNumeric1Box, mdiNumeric2BoxMultiple, mdiNumeric3BoxMultiple, mdiNumeric4BoxMultiple, mdiNumeric5BoxMultiple, mdiNumeric6BoxMultiple, mdiNumeric7BoxMultiple, mdiNumeric8BoxMultiple, mdiNumeric9BoxMultiple, mdiNumeric9PlusBoxMultiple],
    computed: {
        getIcon() {
            switch (this.array.length) {
                case 0:
                    return this.mdiImagePlus
                case 1:
                    return this.mdiNumeric1Box
                case 2:
                    return this.mdiNumeric2BoxMultiple
                case 3:
                    return this.mdiNumeric3BoxMultiple
                case 4:
                    return this.mdiNumeric4BoxMultiple
                case 5:
                    return this.mdiNumeric5BoxMultiple
                case 6:
                    return this.mdiNumeric6BoxMultiple
                case 7:
                    return this.mdiNumeric7BoxMultiple
                case 8:
                    return this.mdiNumeric8BoxMultiple
                case 9:
                    return this.mdiNumeric9BoxMultiple
                default:
                    return this.mdiNumeric9PlusBoxMultiple
            }
        },
    },
}