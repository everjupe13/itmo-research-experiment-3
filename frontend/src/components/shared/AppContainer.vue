<script lang="ts" setup>
import { computed, PropType } from 'vue'

const props = defineProps({
  size: { type: String as PropType<'wide' | 'normal'>, default: 'normal' }
})

const elClass = computed(() => ({
  'container--wide': props.size === 'wide',
  'container--normal': props.size === 'normal'
}))
</script>

<template>
  <div :class="['container', elClass]">
    <slot />
  </div>
</template>

<style scoped>
.container {
  position: relative;

  width: 100%;
  margin: 0 auto;
}

.container.container--wide {
  max-width: 1580px;
  padding-left: 16px;
  padding-right: 16px;
}

.container.container--normal {
  max-width: 1280px;
  padding-left: 16px;
  padding-right: 16px;
}
</style>
