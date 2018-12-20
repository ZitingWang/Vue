import Vue from 'vue'
import App from './App'
import {router} from '@/router'
import {store} from '@/store'
import auth from './auth'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueTables from 'vue-tables-2'
import VueMq from 'vue-mq'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
})
Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert2)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAwfv32MKsNbcz5DDRyXIdaa_j8sjibCc4',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  beforeCreate () {
    auth.init(this)
  },
  components: { App },
  template: '<App/>'
})
