<template>
  <div id="app">
    <router-view>
      hhdhfdh
    </router-view>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>

import loading from '@/components/loading/loading'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: { loading },
  data() {
    return {
      sel: 0,
      index: 0,
    }
  },
  created() {

  },
  computed:{
    ...mapState({
      loading: state => state.loading.isLoading
    }),
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
