<script setup>
import { getInstanceByDom } from 'echarts'
import { onMounted, ref } from 'vue'

const el = ref()

const data = [
  ['Lewis', 86],
  ['Taylor', 71],
  ['Martin', 35],
  ['Clark', 58],
  ['Perez', 80],
]

onMounted(() => {
  const chart = getInstanceByDom(el.value)

  chart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: 0,
  })

  chart.on('mouseover', (ev) => {
    const { seriesIndex, dataIndex } = ev

    chart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
    })

    chart.dispatchAction({
      type: 'highlight',
      seriesIndex,
      dataIndex,
    })
  })
})
</script>

<template>
  <div
    ref="el"
    v-ec="[
      'pieSimple',
      data,
      {
        radius: ['40%', '70%'],
      },
      {
        legend: {
          show: true,
          left: 'left',
          top: 20,
          left: 20,
          orient: 'vertical',
        },
        series: {
          legendHoverLink: false,
        },
      }]" style="width: 100%; height: 300px;"
  />
</template>
