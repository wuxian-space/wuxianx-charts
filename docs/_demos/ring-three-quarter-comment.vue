<script setup>
const data = [
  { name: 'Perez', value: 1321, unit: 'US' },
  { name: 'Harris', value: 4211, unit: 'US' },
  { name: 'Walker', value: 8171, unit: 'US' },
  { name: 'Davis', value: 12171, unit: 'US' },
]
</script>

<template>
  <div
    v-ec="['ringThreeQuarterComment', data]" style="width: 100%; height: 500px;"
  />
</template>
