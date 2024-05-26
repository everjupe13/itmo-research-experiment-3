<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  variant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary'
  },
  loading: { type: Boolean, default: false }
})
</script>

<template>
  <button :class="['app-button', variant, loading && 'loading']">
    <template v-if="loading">{{ '...' }}</template>
    <template v-else><slot /></template>
  </button>
</template>

<style scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.app-button {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 14px;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: transparent; /* #f9f9f9 */

  color: var(--primary-text-color);
  font-size: 14px;
  font-weight: 600;

  transition: 0.3s;
  outline: 0;
  outline: none;
}

.app-button:disabled,
.app-button.loading {
  opacity: 0.7;
  cursor: default;
}

.app-button.primary {
  background-color: #2e4aeb;
  color: #fff;
  border-color: #2e4aeb;
}

.app-button:focus.primary:not(:disabled):not(.loading) {
  border-color: rgba(255, 255, 255, 0.3);
}

.app-button:active.primary:not(:disabled):not(.loading) {
  background-color: #3452f9;
}
</style>
