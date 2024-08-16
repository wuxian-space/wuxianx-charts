<script setup>
const data = [
  {
    name: 2021,
    data: {
      Taylor: 71,
      Clark: 68,
      Martin: 57,
      Perez: 90,
      Lewis: 68,
    },
  },
  {
    name: 2022,
    data: {
      Taylor: 101,
      Clark: 78,
      Martin: 75,
      Perez: 80,
      Lewis: 86,
    },
  },
  {
    name: 2023,
    data: {
      Taylor: 88,
      Clark: 98,
      Martin: 57,
      Perez: 50,
      Lewis: 76,
    },
  },
]
</script>

<template>
  <div
    v-ec="[
      'lineSimple',
      data,
      {
        itemColor: ['#DC3545', '#FFC107', '#0D6EFD'],
      },
    ]"
    style="width: 100%; height: 300px; padding-top: 15px;"
  />
</template>
