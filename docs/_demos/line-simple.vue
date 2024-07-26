<script setup>
import { mockNumberObject } from '@wuxianx/mock'

const data = mockNumberObject()

const ec = ['lineSimple', data, {
  title: { text: 'Title Text' },
  tooltip: { show: true },
}]
</script>

<template>
  <div v-ec="ec" style="width: 100%; height: 300px;" />
</template>
