import * as types from '../mutation-types'
import api from '../../kits/api';

//-------------------------------------------- initial state
const state = {
  userInfo:{},//用户登录
};

//---------------------------------------------- getters
const getters = {
  userInfo:state => state.userInfo,//用户登录
};


//---------------------------------------------- actions
const actions = {
  getuserinfo ({commit, state}, {username, password,captcha}) {
    return api.userlogin({username, password,captcha})
      .then(res => commit(types.LOGIN_SUCCESS, {res}))
      .catch(() => commit(types.LOGIN_FAILURE));
  },
};

//-------------------------------------------- mutations
const mutations = {
  //手机号登录
  [types.LOGIN_SUCCESS] (state, {res}) {
    let data = res.data;
    console.log(res);
    state.userInfo = data;
/*    if (result.code === 1) {//登录成功
      //存userId
      storeManager.setUserId(result.data.userId);
      if (result.data.insDoctorId) {
        //如果是医生 存医生id
        storeManager.setInsDoctorId(result.data.insDoctorId);
        storeManager.setDoctorName(result.data.name);

        //医生存1
        storeManager.setServiceProviderType(1);

        //存roleType 1 是医生  2是主任
        storeManager.setRoleType(result.data.roleType);
        //判断是否已认证
        queryDoctorAuthentication(result.data.insDoctorId);
      } else {
        //如果是健管师  存健管师id
        storeManager.setInsDoctorId(result.data.insHealthManagerId);
        storeManager.setDoctorName(result.data.name);
        //健管师存2
        storeManager.setServiceProviderType(2);

        //跳到首页
        location.href = 'index.html';
      }
    } else {
      alert(result.msg);
      refreshCodeImg();
    }*/
  },
  [types.LOGIN_FAILURE] (state) {
    state = 'failure'
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
