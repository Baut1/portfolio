import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
// import Previewer from 'virtual:vue-component-preview'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import OnuUI from 'onu-ui'
import 'onu-ui/dist/style.css'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

import VueProgressBar from '@aacassandra/vue3-progressbar'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import VueKinesis from 'vue-kinesis'
// import { isClient } from '@vueuse/core'

import Tetikus from '@namchee/tetikus'
import '@namchee/tetikus/dist/tetikus.css'

import VueCalendarHeatmap from 'vue3-calendar-heatmap'
import type { UserModule } from './types'
import App from './App.vue'
import generatedRoutes from '~pages'

const routes = setupLayouts(generatedRoutes)

// progressbar options
const options = {
  color: '#03fc84',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
}

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
    // if (typeof window !== 'undefined') {
    // if (ctx.isClient) {
      // it's safe to use window now
      // const VueFullPage = require("vue-fullpage.js").default;
      // import('vue-fullpage.js').then(module => {
      //   ctx.app.use(module.default);
      // });
    ctx.app.use(VueFullPage)
    // };
    ctx.app.use(VueProgressBar, options)
    ctx.app.use(Carousel, Slide, Pagination, Navigation)
    ctx.app.use(OnuUI)
    ctx.app.use(VueKinesis)
    ctx.app.use(Tetikus)
    ctx.app.use(VueCalendarHeatmap)
  },
)
