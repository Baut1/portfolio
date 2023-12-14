<script setup lang="ts">
const { t } = useI18n()
const contributions = ref([])

let arrContributions: any = [{ date: '2023-9-22', count: 6 }]

const darkRange = ['#1f1f22', '#333333', '#1d466c', '#1d5689', '#1d69ac', '#1B95D1']
const lightRange = ['#ebedf0', '#eeeeee', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']
let colorRange = darkRange

// api call for contributions list
const getContributions = async () => {
  await fetch('https://github-contributions-api.jogruber.de/v4/baut1')
    .then(res => res.json())
    .then(response => arrContributions = response.contributions)
  contributions.value = arrContributions
}
getContributions()

// if(isDark.value === true) {
//     colorRange = darkRange;
// } else {
//     colorRange = lightRange;
// }

isDark.value ? colorRange = darkRange : colorRange = lightRange
</script>

<template>
  <div flex flex-col>
    <h2 text-5xl font-700>
      {{ t('contributions.title') }}
    </h2>
    <span flex justify-center mt-6>
      <calendar-heatmap :end-date="['2023-12-13']" :values="contributions" :range-color="colorRange" w-4xl />
    </span>
  </div>
</template>

<style>
</style>
