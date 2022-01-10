import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const state = {
    theme:false,

}
const getters = {
    getTheme(state){
        return state.theme
    }
}

const mutations = {
    setTheme(state){
        state.theme = !state.theme
    }
}
const actions = {
    updateTheme({commit}){
        commit("setTheme")
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
export default store