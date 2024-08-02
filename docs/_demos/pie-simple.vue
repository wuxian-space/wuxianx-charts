<script setup>
const data = {
  Taylor: 81,
  Clark: 78,
  Martin: 75,
  Perez: 80,
  Lewis: 86,
}

const data2 = Object.entries(data)
</script>

<template>
  <div v-ec="['pieSimple', data]" style="width: 100%; height: 300px;" />
  <p>The simplest example</p>

  <hr>

  <div
    v-ec="[
      'pieSimple',
      data2,
      {
        radius: ['40%', '70%'],
      },
      {
        legend: {
          left: 'left',
          orient: 'vertical',
        },
      }]"
    style="width: 100%; height: 300px;"
  />
  <p>A configured pie chart.</p>
</template>
