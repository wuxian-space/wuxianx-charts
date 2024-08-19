<script setup>
import { ref } from 'vue'
import { getInstanceByDom } from 'echarts'

const data = [
  [2016, { Perez: 75, Harris: 99, Walker: 89, Davis: 51, Johnson: 86 }],
  [2017, { Perez: 85, Harris: 89, Walker: 59, Davis: 72, Johnson: 39 }],
  [2018, { Perez: 35, Harris: 59, Walker: 58, Davis: 63, Johnson: 49 }],
]

const el = ref()

function exportChart() {
  const ecInstance = getInstanceByDom(el.value)
  const src = ecInstance.getDataURL({ type: 'png' })

  downloadBase64File(src)
}

function downloadBase64File(data) {
  const element = document.createElement('a')
  element.setAttribute('href', data)
  element.setAttribute('download', 'echarts-instance.png')

  document.body.appendChild(element)
  element.click()

  document.body.removeChild(element)
}
</script>

<template>
  <div>
    <div
      ref="el"
      v-ec.resize="['radarRainbow', data]"
      style="width: 100%; height: 500px;"
    />

    <t-button block style="margin-top: 10px;" @click="exportChart">
      Download
    </t-button>
  </div>
</template>
