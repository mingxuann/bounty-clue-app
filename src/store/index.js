import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import persistence from './persistence'
const store = createStore({
    state() {
        return {
            discordCode: false,
        }
    },
    mutations: {
        setCode(state, data) {
            state.discordCode = data
        },
    },
    actions: {},
    plugins: [
        createPersistedState({
            reducer(val) {
                return {
                    persistence: val.persistence,
                }
            },
        }),
    ],
    modules: {
        persistence,
    },
})
export default store
