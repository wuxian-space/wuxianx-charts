<script setup lang="ts">
import type { WuxianChartsValue } from '@wuxianx/charts-vue'

const ec: WuxianChartsValue<'radarRainbow'> = ['radarRainbow', [
  [2016, { Perez: 75, Harris: 99, Walker: 89, Davis: 51, Johnson: 86 }],
  [2017, { Perez: 85, Harris: 89, Walker: 59, Davis: 72, Johnson: 39 }],
  [2018, { Perez: 35, Harris: 59, Walker: 58, Davis: 63, Johnson: 49 }],
]]
</script>

<template>
  <div v-ec="ec" style="width: 100%; height: 500px;" />
</template>
