<script setup lang="ts">
import { ref } from 'vue'
import type { DirectiveValue } from '@wuxianx/charts-vue'

const data = ref<DirectiveValue<'barSimple'>>(['barSimple', {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
}])
</script>

<template>
  <div v-ec="data" style="width: 500px; height: 300px;" />
</template>
