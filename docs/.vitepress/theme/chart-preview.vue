<script lang="ts" setup>
import { useData, useRouter } from 'vitepress'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { CodeIcon, MapAimingIcon } from 'tdesign-icons-vue-next'
import { camelCase, kebabCase } from 'lodash-es'
import { getInstanceByDom } from 'echarts'
import Tag from './chart-tags.vue'

const props = defineProps({
  name: String,
})

const name = computed(() => camelCase(props.name))

const visible = ref(false)

const { isDark, lang } = useData()

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

const router = useRouter()
function routerTo() {
  router.go(`/${lang.value}/charts/${kebabCase(props.name)}`)
}
</script>

<template>
  <ClientOnly>
    <div class="chart-preview">
      <header class="chart-preview-header">
        <Tag :name="name" style="font-weight: normal;" />

        <t-button class="docs item" shape="circle" theme="primary" variant="text" @click="routerTo">
          <template #icon>
            <MapAimingIcon />
          </template>
        </t-button>

        <t-button class="view item" shape="circle" theme="primary" variant="text" @click="visible = true">
          <template #icon>
            <CodeIcon />
          </template>
        </t-button>
      </header>

      <div ref="previewContainer" class="chart-preview-component">
        <slot name="component" />
      </div>

      <t-dialog
        v-model:visible="visible" :header="false" :footer="false" mode="modal" placement="center" width="70%"
        destroy-on-close
      >
        <slot />
      </t-dialog>
    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.chart-preview {
  position: relative;
  display: inline-flex;
  width: calc(50% - 10px);
  height: 0;
  padding-top: 35%;
  margin: 5px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;

  @media (max-width: 600px) {
    width: calc(100% - 10px);
    padding-top: 70%;
  }

  &-header {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 15px;
    width: 100%;
    height: 40px;
    border-top: 1px solid var(--vp-c-divider);

    .item {
      margin-right: 10px;
    }

    .docs {
      margin-left: auto;
    }

    .view {
      margin-right: 0;
    }
  }

  &-component {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    top: 0;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
  }

  :global(.t-dialog) {
    max-width: 600px;
  }

  :global(.t-dialog__body) {
    max-height: calc(100vh - 200px);
    padding: 0;
  }

  :global(.t-dialog__close) {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  :global(.t-dialog__body div[class*='language-']) {
    margin: 0;
  }
}
</style>
