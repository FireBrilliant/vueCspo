import Vue from 'vue'
import Vuex from 'vuex'
import server from './modules/server'
import myself from './modules/server'
import loading from './modules/loading' //缓冲
import * as constants from '@/constants'
import Storage from '@/kits/storage'

Vue.use(Vuex)

function setUserInfo(userInfo) {
  let store = new Storage(constants.TOKEN_LOCAL_TYPE);
  store.setItem(constants.TOKEN_KEY, userInfo);
}

function getUserInfo() {
  let store = new Storage(constants.TOKEN_LOCAL_TYPE);
  return store.getItem(constants.TOKEN_KEY);
}

export default new Vuex.Store({
  modules: {
    server,
    myself,
    loading
  }
})
