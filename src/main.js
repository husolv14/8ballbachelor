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
import VueFormGenerator from "vue-form-generator"
import Delay from 'vue-delay'
import VueRouter from 'vue-router'
import Routes from './routes.js';
Vue.use(VueFormGenerator)
Vue.use(vuex)
Vue.use(AsyncComputed)
Vue.use(asyncData)
Vue.config.productionTip = false
Vue.component(GlobalEvents)
Vue.use(ElementUI, { locale: elementLocale })
Vue.use(VueRouter)



/* eslint-disable no-new */

var bus = new Vue()

// const router = new VueRouter({
//     routes: Routes
// })

new Vue({
  el: '#app',
  data(){
    return{
      WidgetData: []
    }

  },
  components: { App, Delay },
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
