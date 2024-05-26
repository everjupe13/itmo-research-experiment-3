<script setup lang="ts">
import { AppHeader } from '@/components/header'
import AppContainer from '@/components/shared/AppContainer.vue'
</script>

<template>
  <AppContainer class="header-wrapper">
    <AppHeader />
  </AppContainer>

  <AppContainer v-bind="$attrs">
    <slot></slot>
  </AppContainer>
</template>

<style scoped>
.header-wrapper {
  margin-bottom: 30px;
}
</style>
