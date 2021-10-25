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
    addListItem: (context, data) => { context.commit("addListItem", data) }
}