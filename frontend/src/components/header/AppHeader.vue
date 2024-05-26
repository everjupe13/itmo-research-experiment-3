<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="header-link" :active-class="'header-link_active'">
      Главная
    </RouterLink>
    <RouterLink
      to="/recommendations"
      class="header-link"
      :active-class="'header-link_active'"
    >
      Рекомендации
    </RouterLink>
    <RouterLink
      to="/analyze"
      class="header-link"
      :active-class="'header-link_active'"
    >
      Эксперимент
    </RouterLink>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  column-gap: 20px;
}

.header-link {
  font-size: 14px;
  font-weight: 500;
  font-family: monospace;
}

.header-link_active {
  color: #f6f6f6;
}
</style>
