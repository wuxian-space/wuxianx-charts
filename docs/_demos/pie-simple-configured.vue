<script setup>
const data = [
  ['Lewis', 86],
  ['Taylor', 81],
  ['Martin', 75],
  ['Clark', 78],
  ['Perez', 80],
]
</script>

<template>
  <div
    v-ec="[
      'pieSimple',
      data,
      {
        radius: ['40%', '70%'],
      },
      {
        legend: {
          left: 'left',
          orient: 'vertical',
        },
      }]"
    style="width: 100%; height: 300px;"
  />
</template>
