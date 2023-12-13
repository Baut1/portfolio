<script setup lang="ts">
let arrContributions = [{ date: '2023-9-22', count: 6 }]

const getContributions = async () => {
  await fetch('https://github-contributions-api.jogruber.de/v4/baut1')
    .then(res => res.json())
    .then(response => arrContributions = response.contributions)
}

getContributions()

alert(arrContributions)
</script>

<template>
  <div flex flex-col mx-12>
    <h1>contribs</h1>
    <calendar-heatmap :end-date="2018 - 9 - 22" :values="[{ date: '1969-6-6', count: 6 }]" dark-mode />
  </div>
</template>

<style>

</style>
