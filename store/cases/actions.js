export default {
    createCase: (context, data) => { context.commit("createCase", data) },
    deleteCase: (context, data) => { context.commit("deleteCase", data) },
    updateTitle: (context, data) => { context.commit("updateTitle", data) },
    updateCategory: (context, data) => { context.commit("updateCategory", data) },
    addDefaultData: (context, data) => { context.commit("addDefaultData", data) },
    updateCaseData: (context, data) => { context.commit("updateCaseData", data) },
    addArrayData: (context, data) => { context.commit("addArrayData", data) },
    removeArrayData: (context, data) => { context.commit("removeArrayData", data) },
    deleteCaseData: (context, data) => { context.commit("deleteCaseData", data) },
    addListItem: (context, data) => { context.commit("addListItem", data) },
    removeListItem: (context, data) => { context.commit("removeListItem", data) },
    deleteColumn: (context, data) => { context.commit("deleteColumn", data); context.dispatch('deleteColumnData', data); if (data.type === "List") context.dispatch('deleteListData', data) },
    addColumn: (context, data) => { context.commit("addColumn", data) },
    deleteColumnData: (context, data) => { context.commit("deleteColumnData", data) },
    deleteListData: (context, data) => { context.commit("deleteListData", data) },
    updateColumnData: (context, data) => { context.commit("updateColumnData", data) },
    moveColumns: (context, data) => { context.commit("moveColumns", data) }
}