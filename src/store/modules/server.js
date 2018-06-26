// import * as types from '../mutation-types'
import api from '../../kits/api';

//-------------------------------------------- initial state
const state = {
  // bookSel:{selIndex:2},//信用预订&预付预订
}

//---------------------------------------------- getters
const getters = {
  // bookSel:state => state.bookSel,//信用预订&预付预订
}


//---------------------------------------------- actions
const actions = {
  //店铺详情
  // getStoreDetail ({ commit, state }, {id,lng,lat}) {
  //   api.storeDetail({id,lng,lat},
  //     res => commit(types.STOREDETAIL_SUCCESS,{res}),
  //     () => commit(types.STOREDETAIL_FAILURE)
  //   );
  // }
};

//-------------------------------------------- mutations
const mutations = {
  //店铺详情
  // [types.STOREDETAIL_SUCCESS] (state,{res}) {
  //   state.storeDetail = res.content.store;
  //   let obj=JSON.stringify(res.content.store)
  //   localStorage.setItem('storeDetail',obj)
  // },
  // [types.STOREDETAIL_FAILURE] (state) {
  //   state = 'failure'
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
}
