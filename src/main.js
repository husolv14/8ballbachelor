// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import GlobalEvents from 'vue-global-events'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import elementLocale from "element-ui/lib/locale/lang/en"
import AsyncComputed from 'vue-async-computed'
import asyncData from 'vue-async-properties'
import vuex from 'vuex'

Vue.use(vuex)
Vue.use(AsyncComputed)
Vue.use(asyncData)
Vue.config.productionTip = false
Vue.component(GlobalEvents)
Vue.use(ElementUI, { locale: elementLocale })


/* eslint-disable no-new */

var bus = new Vue()

new Vue({
  el: '#app',
  data(){
    return{
      FlowData: []
    }

  },
  components: { App },
  template: '<App/>',
  methods:{
    test(){
      this.$message('This is a message.')
    },
    doThis(){
      alert('yo')
    }
  }
})
