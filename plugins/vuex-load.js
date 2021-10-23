
export default ({ app, store }) => {
    // Every time the route changes (fired on initialization too)
    app.router.beforeEach(async (to, from, next) => {
        //  do something to validate
        await store.restored
        next()
    })
}