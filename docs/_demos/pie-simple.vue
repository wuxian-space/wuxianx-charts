<script setup>
const data = {
  Taylor: 81,
  Clark: 78,
  Martin: 75,
  Perez: 80,
  Lewis: 86,
}
</script>

<template>
  <div v-ec="['pieSimple', data]" style="width: 100%; height: 300px;" />
</template>
