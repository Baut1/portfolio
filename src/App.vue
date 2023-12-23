<script setup lang="ts">
// prepare for progressbar
import { getCurrentInstance } from 'vue'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Portfolio',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})

// progress bar
const internalInstance = getCurrentInstance()
internalInstance!.appContext.config.globalProperties.$Progress.start()
setTimeout(() => {
  internalInstance!.appContext.config.globalProperties.$Progress.finish()
}, 3500)
</script>

<template>
  <RouterView />
  <vue-progress-bar />
</template>
