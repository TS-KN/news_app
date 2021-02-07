import { createStore } from 'vue'
import createPersistedState from "vuex-persistedstate"

export const store = createStore({
    state: () => {
        return {
            title: '',
            contetnt: '',
        }
    }
})