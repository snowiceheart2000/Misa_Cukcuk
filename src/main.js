import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import CustomerList from './base/page/customer/CustomerList.vue'
import EmployeeList from './base/page/employee/EmployeeList.vue'
import ReportList from './base/page/report/ReportList.vue'


Vue.config.productionTip = false

//1. Định nghĩa các Path:
const routes = [
  { path: '/customer', component: CustomerList },
  { path: '/employee', component: EmployeeList },
  { path: '/report', component: ReportList },
]

//2. Khởi tạo Router:
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 3. Khai báo sử dụng Vue-Router:
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
