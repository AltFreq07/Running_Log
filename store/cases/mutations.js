
import Vue from 'vue'


export default {
    createCase: (state, data) => {
        state.cases.push(data)
    },
    deleteCase: (state, data) => {
        state.cases = state.cases.filter(item => item.id !== data)
    },
    updateTitle: (state, data) => {
        state.cases.find(item => item.id === data.id).title = data.title
    },
    updateCategory: (state, data) => {
        state.cases.find(item => item.id === data.id).category = data.category
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
    },
    removeListItem: (state, data) => {
        state.cases.find(item => item.id === data.id).lists[data.header].splice(data.index, 1)
        for (const col of state.cases.find(item => item.id === data.id).data) {
            if (col[data.header] === data.data)
                col[data.header] = ''
        }
    },
    deleteColumn: (state, data) => {
        state.cases.find(item => item.id === data.id).columns.splice(data.index, 1)
    },
    addColumn: (state, data) => {
        state.cases.find(item => item.id === data.id).columns.push(data.data)
    },
    deleteColumnData: (state, data) => {
        for (const obj of state.cases.find(item => item.id === data.id).data) {
            delete obj[data.header]
        }
    },
    deleteListData: (state, data) => {
        delete state.cases.find(item => item.id === data.id).lists[data.header]
    },
    updateColumnData: (state, data) => {
        state.cases.find(item => item.id === data.id).columns[data.row][data.header] = data.data
    },
    moveColumns: (state, data) => {
        state.cases.find(item => item.id === data.id).columns = move(state.cases.find(item => item.id === data.id).columns, data.from, data.to)
    }
}

function move(arr, oldIndex, newIndex) {
    if (newIndex >= arr.length) {
        let k = newIndex - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    return arr; // for testing
};
