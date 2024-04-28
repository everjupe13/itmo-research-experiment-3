<script setup lang="ts">
import { computed } from 'vue'

import { SearchBar } from '@/components/analyze/search-bar'
import AppContainer from '@/components/shared/AppContainer.vue'

import { ResultCard } from './components/analyze/results'
import { useAnalyze } from './composables/useAnalyze'

// import HelloWorld from './components/HelloWorld.vue'

const { data, loading } = useAnalyze()

const cards = computed(() => {
  const _cards = [
    {
      id: 0,
      name: 'Запрос сервера 1',
      variant: 'pending',
      time: '00:00:00'
    },
    {
      id: 1,
      name: 'Запрос сервера 1',
      variant: 'success',
      time: '00:00:00'
    },
    {
      id: 2,
      name: 'Запрос сервера 1',
      variant: 'error',
      time: '00:00:00'
    }
  ]
  return _cards
})
</script>

<template>
  <AppContainer>
    <div class="search-bar-wrapper">
      <h3>Укажите алфавит, для генерации динамических строк</h3>
      <SearchBar />
    </div>
  </AppContainer>

  <AppContainer>
    <div class="result-wrapper">
      <ResultCard
        v-for="card in cards"
        :key="card.id"
        :variant="
          // eslint-disable-next-line prettier/prettier
          card.variant as 'pending' | 'success' | 'error'
        "
        :name="card.name"
        :time="card.time"
      />
    </div>
  </AppContainer>
</template>

<style scoped>
.search-bar-wrapper {
  padding-top: 80px;
  padding-bottom: 50px;
}

.result-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 15px;
}
</style>
