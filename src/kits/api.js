import axios from 'axios' // 所有数据api的域名地址'
import * as urls from '../config/urls'


let qs = require('qs')
// axios.defaults.headers.post['Content-Type']='applicatiion/x-www-form-urlencoded;charset=UTF-8';

// const apiPath = 'http://testapi.51tzl.cn/'
const apiPath = 'dev';
let requestPath;
if(apiPath==='dev'){
  requestPath = ''
}else{
  requestPath = 'http://172.0.0.42'
}

export const api = {
  requestPath,
  getData(par) {
    // return axios.post(urls.API_PUBLIC_STOREDETAIL, qs.stringify(par)) //店铺详情
  },
};

function apiPost(url, params, success, failure) {
  return axios.post(url, qs.stringify(params)).then((res) => {
    res = res.data;
    console.log('请求成功');
    success(res);
  }).catch((err) => {
    console.log('请求失败')
  });
}

function apiFetch(url, params) {
  return axios.post(url, qs.stringify(params));
}
export default {
  userlogin({ username, password, captcha}) { //用户登陆
    return apiFetch(urls.API_LOGIN_LOGIN, { username, password, captcha});
  },
/*  storeList({ openid, city, lng, lat, page, size, type, style, filter, value, area }, success, failure) { //订房首页
    return apiPost(urls.API_COMMON_STORELIST, {
      openid: openId,
      city,
      lng,
      lat,
      page,
      size,
      type,
      style,
      filter,
      value,
      area
    }, success, failure);
  }*/
}
