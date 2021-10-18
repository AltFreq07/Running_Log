
import Vue from 'vue'
export default {
    createCase: (state, data) => {
        state.cases.push(data)
    },
    updateTitle: (state, data) => {
        state.cases.find(item => item.id === data.id).title = data.title
    },
    addDefaultData: (state, data) => {
        state.cases.find(item => item.id === data.id).data.push(data.default)
    },
    updateCaseData: (state, data) => {
        state.cases.find(item => item.id === data.id).data[data.row][data.header] = data.data
    },
    addArrayData: (state, data) => {
        state.cases.find(item => item.id === data.id).data[data.row][data.header].push(data.data)
    },
    removeArrayData: (state, data) => {
        state.cases.find(item => item.id === data.id).data[data.row][data.header].splice(data.index, 1)
    },
    deleteCaseData: (state, data) => {
        state.cases.find(item => item.id === data.id).data.splice(data.index, 1)
    },
    addListItem: (state, data) => {
        if (!state.cases.find(item => item.id === data.id).lists[data.header]) {
            Vue.set(state.cases.find(item => item.id === data.id).lists, data.header, [])
            state.cases.find(item => item.id === data.id).lists[data.header].push(data.data)
        }
        else if (!state.cases.find(item => item.id === data.id).lists[data.header].includes(data.data)) {
            state.cases.find(item => item.id === data.id).lists[data.header].push(data.data)
        }
    }
}