<script setup lang="ts">
import type { DirectiveValue } from '@wuxianx/charts-vue'
import { mockNumberObject } from '@wuxianx/mock'

const data = mockNumberObject()

const ec: DirectiveValue<'barSimple'> = ['barSimple', data]
</script>

<template>
  <div v-ec="ec" style="width: 100%; height: 300px;" />
</template>
