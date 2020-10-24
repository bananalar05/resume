import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
/* import { faLinkedinIn } from '@fortawesome/free-solid-svg-icons' */
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faHome)
library.add(faEnvelope)
/* library.add(faLinkedinIn) */
library.add(faMobileAlt)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)