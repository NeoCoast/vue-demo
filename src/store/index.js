import Vue from 'vue'
import Vuex from 'vuex'
import browseModule from './modules/browse'
import searchModule from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    browse: browseModule,
    search: searchModule,
  },
})
