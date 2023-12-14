<script setup lang="ts">
const { t } = useI18n()
const contributions = ref([])

let arrContributions: any = [{ date: '2023-9-22', count: 6 }]
const endDate = new Date().toISOString().split('T')[0]

// color schemes
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

// check which color scheme to use
isDark.value ? colorRange = darkRange : colorRange = lightRange
</script>

<template>
  <div flex flex-col>
    <h2 text-5xl font-700>
      {{ t('contributions.title') }}
    </h2>

    <div flex justify-center mt-6>
      <calendar-heatmap
        class="calendar"
        :end-date="endDate"
        :values="contributions"
        :range-color="colorRange"
        :round="1"
        w-4xl
        flex
      />
    </div>
  </div>
</template>

<style>
  .calendar {
    font-size: 0.5rem;
  }
</style>
