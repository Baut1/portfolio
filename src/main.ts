import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
// import Previewer from 'virtual:vue-component-preview'
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import OnuUI from 'onu-ui'
import 'onu-ui/dist/style.css'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import VueKinesis from "vue-kinesis";
// import { isClient } from '@vueuse/core'

import Tetikus from '@namchee/tetikus';
import '@namchee/tetikus/dist/tetikus.css';

const routes = setupLayouts(generatedRoutes)

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
      ctx.app.use(VueFullPage);
    // };
    ctx.app.use(Carousel, Slide, Pagination, Navigation);
    ctx.app.use(OnuUI);
    ctx.app.use(VueKinesis);
    ctx.app.use(Tetikus);
  },
)
