<script lang="ts" setup>
import { useSlots } from 'vue'

const slots = useSlots()
</script>

<template>
  <div class="demo">
    <div class="demo-preview">
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
