<script setup>
import { ref } from 'vue'
import { mockNumberObject } from '@wuxianx/mock'

const ec = ref(['barSimple', mockNumberObject()])

function update() {
  ec.value[0] = ec.value[0] === 'lineSimple' ? 'barSimple' : 'lineSimple'
  ec.value[1] = mockNumberObject()
}
</script>

<template>
  <div>
    <div v-ec.watch="ec" style="width: 100%; height: 300px;" />

    <t-button block @click="update">
      Refresh
    </t-button>

    <pre>{{ ec }}</pre>
  </div>
</template>
