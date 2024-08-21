<script lang="ts" setup>
import { nextTick, onMounted, ref, useSlots, watch } from 'vue'
import { useData } from 'vitepress'
import { getInstanceByDom } from 'echarts'

const slots = useSlots()

const { isDark } = useData()

const previewContainer = ref()

watch(isDark, () => {
  setChartDark()
})

onMounted(async () => {
  await nextTick()
  setChartDark()
})

function setChartDark() {
  const chart = getInstanceByDom(previewContainer.value?.children?.[0])
  if (!chart)
    return

  chart.setOption({
    darkMode: isDark.value,
  })
}
</script>

<template>
  <div class="demo">
    <div ref="previewContainer" class="demo-preview">
      <slot name="component" />
    </div>

    <div v-if="slots.default" class="demo-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  width: 100%;
  padding: 15px;
  margin: 15px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;

  &-content {
    border-top: 1px solid var(--vp-c-divider);
  }
}
</style>
