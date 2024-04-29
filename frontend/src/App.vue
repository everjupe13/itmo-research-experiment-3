<script setup lang="ts">
import { computed } from 'vue'

import { SingleResult } from '@/components/analyze/results'
import { SearchBar } from '@/components/analyze/search-bar'
import AppContainer from '@/components/shared/AppContainer.vue'
import { useAnalyze } from '@/composables/useAnalyze'

const { data: analyzes } = useAnalyze()
const computedAnalyzes = computed(() =>
  analyzes.value
    .map((analyze, index) => ({ id: index + 1, items: analyze }))
    .reverse()
)
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
      <template v-for="analyze in computedAnalyzes" :key="analyze.id">
        <SingleResult :id="analyze.id" :items="analyze.items || []" />
      </template>
    </div>
  </AppContainer>
</template>

<style scoped>
.search-bar-wrapper {
  padding-top: 80px;
  padding-bottom: 50px;
}

.result-wrapper {
  /* display: flex; */
  flex-wrap: wrap;
  gap: 10px 15px;
}
</style>
