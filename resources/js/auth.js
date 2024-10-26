import '@js/bootstrap'

import Vue from 'vue'
import { axios } from '@js/axios-config'
import BootstrapVue from 'bootstrap-vue'
import BaseComponents from '@components/bootstraps/base'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { createLocales } from '@js/vendor/vue-i18n-config'
const i18n = createLocales(window.settings.locale)

import '@js/vendor/sweet-alert'
import '@js/vendor/vee-validate'

Vue.use(BootstrapVue)
Vue.use(BaseComponents)
Vue.component("ValidationProvider", ValidationProvider)
Vue.component("ValidationObserver", ValidationObserver)

Vue.component('login-app', require('./LoginApp.vue').default);

Vue.prototype.$app = window.settings
Vue.prototype.$http = axios
Vue.prototype.$app.route = window.route

Vue.prototype.$app.alert = window.swal

const app = new Vue({
  el: '#auth',
  i18n
});
