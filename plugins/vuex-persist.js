import VuexPersistence from 'vuex-persist'
import localforage from 'localforage'

export default ({ store }) => {
    new VuexPersistence({
        /* your options */
        storage: localforage,
        asyncStorage: true
    }).plugin(store);
}