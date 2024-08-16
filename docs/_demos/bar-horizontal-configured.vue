<script setup>
const data = [
  {
    name: 2021,
    data: {
      Taylor: 81,
      Clark: 78,
      Martin: 75,
    },
  },
  {
    name: 2022,
    data: {
      Taylor: 31,
      Clark: 88,
      Martin: 28,
    },
  },
  {
    name: 2023,
    data: {
      Taylor: 18,
      Clark: 87,
      Martin: 57,
    },
  },
]
</script>

<template>
  <div
    v-ec="[
      'barHorizontal',
      data,
      {
        itemColor: ['#DC3545', '#FFC107', '#0D6EFD'],
        borderRadius: [0, 1000, 1000, 0],
        barMaxWidth: 10,
      },
    ]"
    style="width: 100%; height: 300px; padding: 15px 0 0 15px;"
  />
</template>
