import '@js/bootstrap'

import Vue from 'vue'
import App from '@js/MainApp'
import { axios } from '@js/axios-config'
import BootstrapVue from 'bootstrap-vue'
import BaseComponents from '@components/bootstraps/base'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { createRouter } from '@js/router'
import { createLocales } from '@js/vendor/vue-i18n-config'

import '@js/vendor/sweet-alert'
import '@js/vendor/vee-validate'

Vue.use(BootstrapVue)
Vue.use(BaseComponents)
Vue.component("ValidationProvider", ValidationProvider)
Vue.component("ValidationObserver", ValidationObserver)

Vue.prototype.$app = window.settings
Vue.prototype.$http = axios
Vue.prototype.$app.route = window.route

Vue.prototype.$app.alert = window.swal

export const createApp = () => {
  const i18n = createLocales(window.settings.locale)
  Vue.prototype.$app = window.settings
  Vue.prototype.$http = axios
  Vue.prototype.$app.route = window.route
  Vue.prototype.$app.i18n = i18n
  Vue.prototype.$app.alert = window.swal

  const router = createRouter(Vue.prototype.$app, i18n)
  const app = new Vue({
    router,
    i18n,
    render: h => h(App)
  })

  return { app, router }
}

if (document.getElementById('app')) {
  const { app } = createApp()
  app.$mount('#app')
}

