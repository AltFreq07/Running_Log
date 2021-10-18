export default function ({ redirect, route, store }) {
    if (!store.state.cases.cases.find(item => item.id === route.params.caseID)) {
        return redirect('/')
    }
}