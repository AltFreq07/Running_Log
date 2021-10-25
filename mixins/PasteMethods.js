import { mapActions } from 'vuex'
export default {
    methods: {
        pasteEvent(e) {
            for (let i = 0; i < e.clipboardData.items.length; i++) {
                ; (async (item) => {
                    if (item.type.includes('image')) {
                        const blob = await new Response(item.getAsFile()).blob()
                        const base64 = await this.toBase64(blob)
                        this.pushCaseData({
                            id: this.caseID,
                            row: this.caseRow,
                            header: this.caseHeader,
                            data: base64,
                        })
                    }
                })(e.clipboardData.items[i])
            }
        },
        toBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => resolve(reader.result)
                reader.onerror = (error) => reject(error)
            })
        },
        ...mapActions({
            pushCaseData: 'cases/addArrayData',
        }),
    },
}