<script setup>
const data = {
  Taylor: 81,
  Clark: 78,
  Martin: 75,
  Perez: 80,
}
</script>

<template>
  <div
    v-ec="['barHorizontal', data]"
    style="width: 100%; height: 300px; padding: 15px 0 0 15px;"
  />
</template>
