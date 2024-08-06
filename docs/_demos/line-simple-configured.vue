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
  <div
    v-ec="[
      'lineSimple',
      [
        { name: 2021, data },
        { name: 2022, data: createNewObj(data) },
        { name: 2023, data: createNewObj(data) },
      ],
      {
        itemColor: ['#DC3545', '#FFC107', '#0D6EFD'],
      },
      {
        series: [
          { smooth: true },
          { smooth: true },
          { smooth: true },
        ],
        xAxis: {
          boundaryGap: false,
        },
      },
    ]" style="width: 100%; height: 300px;"
  />
</template>
