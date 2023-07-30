<script setup lang="ts">
// import { fairyDustCursor } from "cursor-effects";

// translate
const { t } = useI18n()

// fullpage.js options
const options = {
  licenseKey: 'gplv3-license',
  anchors: ['home', 'projects', 'contact'],
  navigation: true,
  navigationTooltips: ['Home', 'Projects', 'Contact'],
  credits: {enabled: true}
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
  <div id="app" thover>
    <!-- <ClientOnly> -->
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Welcome></Welcome>
      </div>

      <div class="section" thover>
        <h2 text-5xl font-700>{{ t('projects.title') }}</h2>
        <h3 text-3 pb-6>{{ t('projects.note') }}</h3>
        <ProjectsCarousel></ProjectsCarousel>
      </div>

      <div class="section" thover >
        <Contact></Contact>
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