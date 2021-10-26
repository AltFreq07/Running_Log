export default {
    getCases: state => state.cases,
    getCaseIDList: state => state.cases.map(item => item.id),
    getCase: state => (id) => state.cases.find(item => item.id === id),
    getListItems: state => (id, header) => state.cases.find(item => item.id === id).lists[header] || [],
    getColumns: state => (id) => {
        console.log("Columns", id)
        return state.cases.find(item => item.id === id).columns
    }
}