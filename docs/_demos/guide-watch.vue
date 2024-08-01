<script setup>
import { ref } from 'vue'

const data = {
  Taylor: 81,
  Clark: 78,
  Martin: 75,
  Perez: 80,
  Lewis: 86,
  Wilson: 81,
  Jackson: 87,
}

const ec = ref(['barSimple', data])

function refresh() {
  ec.value[0] = Math.random() > 0.5 ? 'barSimple' : 'lineSimple'

  // Please note that this is a new `Object`, not a reference to `data`.
  ec.value[1] = Object.keys(data).reduce((res, key) => {
    res[key] = Math.round(Math.random() * 100)

    return res
  }, {})
}
</script>

<template>
  <div>
    <div v-ec.watch="ec" style="width: 100%; height: 300px;" />

    <t-button block @click="refresh">
      Refresh
    </t-button>

    <pre>{{ ec }}</pre>
  </div>
</template>
