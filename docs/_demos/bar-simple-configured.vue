<script setup>
const data = [
  {
    name: 2021,
    data: {
      Taylor: 81,
      Clark: 78,
      Martin: 75,
      Perez: 80,
      Lewis: 86,
    },
  },
  {
    name: 2022,
    data: {
      Taylor: 31,
      Clark: 88,
      Martin: 28,
      Perez: 83,
      Lewis: 16,
    },
  },
  {
    name: 2023,
    data: {
      Taylor: 18,
      Clark: 87,
      Martin: 57,
      Perez: 8,
      Lewis: 68,
    },
  },
]
</script>

<template>
  <div
    v-ec="[
      'barSimple',
      data,
      {
        itemColor: ['#DC3545', '#FFC107', '#0D6EFD'],
      },
    ]"
    style="width: 100%; height: 300px; padding-top: 15px;"
  />
</template>
