<script setup lang="ts">
// I18n
const { t } = useI18n()

const contributions = ref([])

let arrContributions: any = [{ date: '2023-9-22', count: 6 }]

// get dates
const currentDate = new Date()

const endDate = currentDate.toISOString().split('T')[0]

const lastYearDate = new Date(currentDate.valueOf())
lastYearDate.setFullYear(lastYearDate.getFullYear() - 1)
const endDate2 = lastYearDate.toISOString().split('T')[0]

const previousDate = new Date(currentDate.valueOf())
previousDate.setFullYear(previousDate.getFullYear() - 2)
const endDate3 = previousDate.toISOString().split('T')[0]

// color schemes
const darkRange = ['#1f1f22', '#333333', '#1d466c', '#1d5689', '#1d69ac', '#1B95D1']
const lightRange = ['#f5f7fa', '#eeeeee', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']
let colorRange = darkRange

// api call for contributions list
const getContributions = async () => {
  await fetch('https://github-contributions-api.jogruber.de/v4/baut1')
    .then(res => res.json())
    .then(response => arrContributions = response.contributions)
  contributions.value = arrContributions
}
getContributions()

// check which color scheme to use
isDark.value ? colorRange = darkRange : colorRange = lightRange
</script>

<template>
  <div flex flex-col>
    <!-- title -->
    <h2 text-5xl font-700>
      {{ t('contributions.title') }}
    </h2>

    <!-- calendars container -->
    <div flex justify-center mt-6>
      <div flex flex-col>
        <calendar-heatmap
          class="calendar"
          :end-date="endDate"
          :values="contributions"
          :range-color="colorRange"
          :round="1"
          w-4xl
          flex
        />
        <calendar-heatmap
          class="calendar"
          :end-date="endDate2"
          :values="contributions"
          :range-color="colorRange"
          :round="1"
          w-4xl
          flex
        />
        <calendar-heatmap
          class="calendar"
          :end-date="endDate3"
          :values="contributions"
          :range-color="colorRange"
          :round="1"
          w-4xl
          flex
        />
      </div>
    </div>
  </div>
</template>

<style>
  .calendar {
    font-size: 0.5rem;
  }

  /* hide legend */
  .vch__legend {
    display: none;
  }
</style>
