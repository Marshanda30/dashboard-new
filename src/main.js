import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(Vuex)


axios.defaults.baseURL = 'https://apibts.herokuapp.com/api/sensor'
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

let routes =[
  { path: '/', name: 'login', component:require('./components/view/Login.vue').default },
  { path: '/register', name: 'register',  component:require('./components/view/Register.vue').default },
  { path: '/home', name: 'Home', component:require('./components/view/Home.vue').default },
  { path: '/shelter',name:'Shelter', component:require('./components/view/Shelter.vue').default },
  { path: '/addShelter', name: 'addShelter' , component:require('./components/view/AddShelter.vue').default },
  { path: '/editshelter/:id', name: 'editshelter' , component:require('./components/view/EditShelter.vue').default },
  { path: '/realtime', name: 'realtime', component:require('./components/view/Realtime.vue').default },
  { path: '/addsensor', name: 'addsensor', component:require('./components/view/AddSensor.vue').default },
  { path: '/editsensor/:id', name: 'editsensor', component:require('./components/view/EditSensor.vue').default },
  { path: '/tabel', name: 'Tabel', component:require('./components/view/Tabel.vue').default }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



