<script setup>
const data = {
  Taylor: 31,
  Clark: 71,
  Martin: 55,
  Perez: 89,
  Lewis: 46,
}
</script>

<template>
  <div v-ec="['pieSimple', data]" style="width: 100%; height: 300px;" />
</template>
