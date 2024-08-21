<script setup lang="ts">
import { useData } from 'vitepress'
import { camelCase } from 'lodash-es'

const props = defineProps<{
  name?: string
  style?: Record<string, any>
}>()

const { page } = useData()

const defaultName = camelCase(page.value.filePath?.split('/')?.at(-1)?.split('.')?.[0])
function meta(k: string) {
  return window?.__custom__?.chartsMeta?.charts?.[props.name || defaultName]?.[k]
}
</script>

<template>
  <ClientOnly>
    <div class="charts-meta-tag" :style="style">
      <div class="charts-meta-tag__item">
        {{ meta('name') }}
      </div>
      <div class="charts-meta-tag__item">
        v{{ meta('initialVersion') }}
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="scss">
.charts-meta-tag {
  $h: 22px;

  display: inline-flex;
  align-items: baseline;
  height: $h;
  line-height: $h;
  border-radius: $h;
  font-size: 12px;
  font-weight: bold;
  overflow: hidden;

  &__item {
    padding: 0 10px;

    &:first-child {
      padding-left: 15px;
      color: var(--vp-badge-tip-text);
      background-color: var(--vp-badge-tip-bg);
    }

    &:last-child {
      padding-right: 15px;
      color: var(--vp-badge-warning-text);
      background-color: var(--vp-badge-warning-bg);
    }
  }
}
</style>
