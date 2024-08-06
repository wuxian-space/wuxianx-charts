<script lang="ts" setup>
import { computed, ref } from 'vue'
import { CodeIcon } from 'tdesign-icons-vue-next'
import { camelCase } from 'lodash-es'

const props = defineProps({
  name: String,
})

const name = computed(() => camelCase(props.name))
const version = computed(() => {
  const v = window.__custom__?.chartsMeta?.charts?.[name.value]?.initialVersion

  return v ? `v${v}` : false
})

const visible = ref(false)
</script>

<template>
  <div class="chart-preview">
    <header class="chart-preview-header">
      <t-tag class="item" theme="primary" variant="light" size="small">
        {{ name }}
      </t-tag>

      <t-tag v-if="version" class="item" theme="warning" variant="light" size="small">
        {{ version }}
      </t-tag>

      <t-button class="view item" shape="circle" theme="primary" variant="text" @click="visible = true">
        <template #icon>
          <CodeIcon />
        </template>
      </t-button>
    </header>

    <div class="chart-preview-component">
      <slot name="component" />
    </div>

    <t-dialog
      v-model:visible="visible" :header="false" :footer="false" mode="modal" placement="center" width="70%"
      destroy-on-close
    >
      <slot />
    </t-dialog>
  </div>
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

    .view {
      margin-left: auto;
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
