<script setup>
const data = {
  Taylor: 81,
  Clark: 78,
  Martin: 75,
  Perez: 80,
  Lewis: 86,
  Wilson: 81,
  Jackson: 87,
}

function createNewObj(obj) {
  const result = {}

  Object.keys(obj).forEach((key) => {
    const value = Math.random() * 100
    result[key] = value
  })

  return result
}
</script>

<template>
  <div v-ec="['barSimple', data]" style="width: 100%; height: 300px;" />
  <p>The simplest example</p>

  <hr>

  <div
    v-ec="[
      'barSimple',
      [
        { name: 2021, data: createNewObj(data) },
        { name: 2022, data: createNewObj(data) },
        { name: 2023, data: createNewObj(data) },
      ],
      {
        itemColor: ['#DC3545', '#FFC107', '#0D6EFD'],
      },
      {
        title: {
          text: 'Configured Bar',
          textStyle: {
            color: '#052C65',
            fontSize: 20,
          },
        },
        grid: {
          top: '60px',
          right: '10px',
          bottom: '10px',
          left: '10px',
          containLabel: true,
        },
      },
    ]"
    style="width: 100%; height: 300px;"
  />
  <p>This is a grouped bar chart with customized colors and Echarts configuration.</p>
</template>
