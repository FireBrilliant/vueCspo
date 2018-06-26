const state = {
    isLoading:false  
}
const getters = {
    isLoading:state => state.isLoading
}
const mutations = {
    updateLoadingState(state,flag){
        state.isLoading=flag
    }
}
const actions = {
    onLoading(context,flag){
        context.commit("updateLoadingState",flag);
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}