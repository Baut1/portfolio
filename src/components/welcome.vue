<script setup lang="ts">
const { t } = useI18n()

const x = ref(0)
function onMousemove(e:any) {
  x.value = e.clientX;
}
</script>

<template>
    <div @mousemove="onMousemove" :style="{ color: `hsl(${x/25 + 150}, 80%, 50%)` }" h-screen flex flex-col justify-center>
        <h1 text-6xl font-700>{{ t('intro.hi', { name: 'recruiter' }) }}</h1>
        <h2 text-xl font-500>{{ t('intro.desc', { name: 'recruiter' }) }}</h2>
        <div w-xs fixed bottom-4 mx-auto inset-x-0>
          <o-alert type="primary" light :description="t('button.scroll')" center closable />
        </div>
        <o-icon self-center o-primary name="i-carbon-chevron-down"></o-icon>
    </div>
</template>