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
      Taylor: 51,
      Clark: 88,
      Martin: 82,
      Perez: 83,
      Lewis: 61,
    },
  },
  {
    name: 2023,
    data: {
      Taylor: 81,
      Clark: 87,
      Martin: 57,
      Perez: 82,
      Lewis: 68,
    },
  },
]
</script>

<template>
  <div
    v-ec="['barHorizontalStack', data]"
    style="width: 100%; height: 300px; padding-top: 15px;"
  />
</template>
