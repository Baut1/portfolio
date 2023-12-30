<script setup lang="ts">
const { t } = useI18n()

const x = ref(0)
function onMousemove(e: any) {
  x.value = e.clientX
}

const particlesLoaded = async (container: any) => {
  // console.log("Particles container loaded", container);
}
</script>

<template>
  <div :style="{ color: `hsl(${x / 25 + 150}, 80%, 50%)` }" h-screen flex flex-col justify-center @mousemove="onMousemove">
    <h1 text-6xl font-700>
      {{ t('intro.hi', { name: 'recruiter' }) }}
    </h1>
    <h2 text-xl font-500>
      {{ t('intro.desc', { name: 'recruiter' }) }}
    </h2>
    <div w-xs fixed bottom-4 mx-auto inset-x-0>
      <o-alert type="primary" light :description="t('button.scroll')" center closable />
    </div>
    <o-icon self-center o-primary name="i-carbon-chevron-down" />
  </div>

  <vue-particles id="tsparticles" :particles-loaded="particlesLoaded" url="http://foo.bar/particles.json" />

  <vue-particles
    id="tsparticles"
    :particles-loaded="particlesLoaded"
    :options="{
      background: {
        color: {
          value: '#0d47a1',
        },
        opacity: 0,
      },
      fpsLimit: 90,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#00aabb',
        },
        links: {
          color: '#00bbaa',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'bounce',
          random: false,
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }"
  />
</template>
