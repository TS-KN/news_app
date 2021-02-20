import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export const store = createStore({
    state () {
        return {
            news:[],
            topic:'今日のニュース',
            category: 'breaking-news',
        }
    },
    mutations: {
        select_category: (state, category) => {
            state.category = category
        },
        select_topic: (state, topic) => {
            state.topic = topic
        },
    },
    actions: {
        select: (context, category) => {
            context.commit('select_category', category)
            if(category == 'business') {
                context.commit('select_topic', 'ビジネス')
            }else if(category == 'technology') {
                context.commit('select_topic', 'テクノロジー')
            }else if(category == 'entertainment') {
                context.commit('select_topic', 'エンタメ')
            }else if(category == 'sports') {
                context.commit('select_topic', 'スポーツ')
            }else if(category == 'science') {
                context.commit('select_topic', '科学')
            }else if(category == 'health') {
                context.commit('select_topic', '健康')
            }else{
                context.commit('select_topic', '今日のニュース')
            }
        }
    },
    getters: {
        getCategory(state) {
            return state.category
        }
    }
})