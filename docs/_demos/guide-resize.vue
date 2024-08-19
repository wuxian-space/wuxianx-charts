<script setup>
const data = {
  Taylor: 502.84,
  Clark: 205.97,
  Martin: 332.79,
  Perez: 282.55,
  Wilson: 214.02,
}
</script>

<template>
  <div
    v-ec.resize="['lineGradientTrend', data]"
    style="width: 100%; height: 300px;"
  />
</template>
