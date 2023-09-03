// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

// import Vue from 'vue'
// import App from './App.vue'
// import router from './routes'; //설정 라우터 호출

// Vue.config.productionTip = true;

// new Vue({
//   render: h => h(App)
//   ,router               //뷰에 설정
// }).$mount('#app')