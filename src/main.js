import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from 'aos'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSkype } from '@fortawesome/free-brands-svg-icons'
import { faMailchimp } from '@fortawesome/free-brands-svg-icons'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.css'

Vue.config.productionTip = false;
library.add(faLinkedin, faGithub, faSkype, faMailchimp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
}).$mount("#app");
