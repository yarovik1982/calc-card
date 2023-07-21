import { createApp,  } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
 

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App)

app
.use(store)
.use(router)
.mount('#app')

