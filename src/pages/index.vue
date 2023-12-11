<script setup lang="ts">
// import { fairyDustCursor } from "cursor-effects";

// translate
const { t } = useI18n()

// fullpage.js options
const options = {
  licenseKey: 'gplv3-license',
  anchors: ['home', 'projects', 'contact', 'education'],
  navigation: true,
  navigationTooltips: ['Home', 'Projects', 'Contact', 'Education'],
  credits: {enabled: false}
}

const tetikusOptions = {
  borderColor: "DarkSlateGray",
  // buttonMap: ['left'],
  hideOnOut: true,
  invertColor: true,
  lerp: 0.15
}

// const fullpage = ref();

// onMounted(() => {
//   fullpage.value.init();
// })

</script>

<template>
  <tetikus :options="tetikusOptions"/>
  <div id="app">
    <!-- <ClientOnly> -->
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Welcome></Welcome>
      </div>

      <div class="section">
        <div>
          <h2 text-5xl font-700>{{ t('projects.title') }}</h2>
          <h3 text-3 pb-3>{{ t('projects.note') }}</h3>
          <ProjectsCarousel></ProjectsCarousel>
        </div>
      </div>

      <div class="section">
        <Contact></Contact>
      </div>

      <div class="section">
        <Education></Education>
      </div>
    </full-page>
    <!-- </ClientOnly> -->
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
</style>