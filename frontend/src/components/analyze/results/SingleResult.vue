<script setup lang="ts">
import { computed } from 'vue'

import { AnalyzeInterface } from '@/composables/useAnalyze/types'

type Props = {
  id: number
  items: AnalyzeInterface[]
}
const props = defineProps<Props>()

const experimentName = computed(() => `Эксперимент #${props.id}`)

const getName = (name: string, count: number) => {
  return [name, count].filter(Boolean).join(' - ')
}

const getStartTime = (time: string) => {
  return new Date(time).toLocaleString()
}
</script>

<template>
  <div class="result">
    <h3 class="result__title">{{ experimentName }}</h3>
    <div class="result__content">
      <template v-for="item in props.items" :key="item.id">
        <div class="result__content-card">
          <div class="result__content-card-block">
            <span class="result__content-card-title">Цель:</span>
            <span class="result__content-card-text">
              {{ getName(item.name, item.count) }}
            </span>
          </div>
          <div class="result__content-card-block">
            <span class="result__content-card-title">Количество запросов:</span>
            <span class="result__content-card-text">
              {{ item.requests }}
            </span>
          </div>
          <div class="result__content-card-block">
            <span class="result__content-card-title">Время:</span>
            <span class="result__content-card-text">
              {{ item.time }}
            </span>
          </div>
          <div class="result__content-card-block">
            <span class="result__content-card-title">Время начала:</span>
            <span class="result__content-card-text">
              {{ getStartTime(item.start_date) }}
            </span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.result {
  padding: 10px 0 30px;
}

.result__title {
  margin-top: 0px;
  margin-bottom: 20px;

  font-size: 16px;
}

.result__content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.result__content-card-block {
  display: flex;
  column-gap: 8px;

  font-family: monospace;
}
.result__content-card-title {
  min-width: 200px;

  font-weight: 300;
  font-size: 14px;

  opacity: 0.8;
}
.result__content-card-text {
  font-size: 14px;
  font-weight: 600;
}
</style>
