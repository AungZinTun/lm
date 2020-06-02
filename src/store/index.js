import Vue from 'vue'
import Vuex from 'vuex'
import * as users from '@/store/modules/users.js'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import wonTickets from '@/store/modules/wonticket.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters,
  actions,
  mutations,
  modules: {
   users,
   wonTickets,
  },
})
