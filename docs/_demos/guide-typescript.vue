<script setup lang="ts">
import { type WuxianxChartsValue, defineChartOptions } from '@wuxianx/charts-vue'

const _data = {
  Taylor: 81,
  Clark: 78,
  Martin: 75,
  Perez: 80,
  Lewis: 86,
  Wilson: 81,
  Jackson: 87,
}

const data1: WuxianxChartsValue<'barSimple'> = ['barSimple', _data]

const data2 = defineChartOptions('lineSimple', _data)
</script>

<template>
  <div>
    <div v-ec="data1" style="width: 100%; height: 300px;" />

    <div v-ec="data2" style="width: 100%; height: 300px;" />
  </div>
</template>
