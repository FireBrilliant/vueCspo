// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  store.dispatch("onLoading", true);
  next()
})
// 这里为了让效果明显一些加了延时
router.afterEach((to, from) => {
  setTimeout(function() {
    store.dispatch("onLoading", false);
  }, 800)

})
new Vue({
  el: '#app',
  router,
  store,
  watch: {
    '$route': function() {
      window.scrollTo(0, 0)
    }
  },
  components: { App },
  template: '<App/>'
})
