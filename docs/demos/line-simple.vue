<script setup lang="ts">
import { ref } from 'vue'
import type { DirectiveValue } from '@wuxianx/charts-vue'

const data = ref<DirectiveValue<'lineSimple'>>(['lineSimple', {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
}, {
  title: {
    text: 'Title Text',
  },
  tooltip: {
    show: true,
  },
}])
</script>

<template>
  <div v-ec="data" style="width: 100%; height: 300px;" />
</template>
