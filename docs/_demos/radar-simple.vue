<script setup>
const data = [
  [2016, { Perez: 73, Harris: 99, Walker: 89, Davis: 51, Johnson: 86 }],
  [2017, { Perez: 85, Harris: 89, Walker: 59, Davis: 72, Johnson: 39 }],
  [2018, { Perez: 35, Harris: 59, Walker: 58, Davis: 63, Johnson: 49 }],
]
</script>

<template>
  <div v-ec="['radarSimple', data]" style="width: 100%; height: 300px;" />
</template>
