<script setup>
const data = [
  {
    name: 2021,
    data: {
      Taylor: 502.84,
      Clark: 205.97,
      Martin: 332.79,
      Perez: 282.55,
      Wilson: 214.02,
    },
  },
  {
    name: 2022,
    data: {
      Taylor: 281.55,
      Clark: 398.35,
      Martin: 214.02,
      Perez: 179.55,
      Wilson: 356.14,
    },
  },
]
</script>

<template>
  <div
    v-ec="[
      'lineGradientTrend',
      data,
    ]" style="width: 100%; height: 300px;"
  />
</template>
