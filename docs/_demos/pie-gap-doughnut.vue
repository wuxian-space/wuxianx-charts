<script setup>
const data = [
  ['Lewis', 86],
  ['Taylor', 71],
  ['Martin', 35],
  ['Clark', 58],
  ['Perez', 80],
]
</script>

<template>
  <div v-ec="['pieGapDoughnut', data]" style="width: 100%; height: 300px;" />
</template>
