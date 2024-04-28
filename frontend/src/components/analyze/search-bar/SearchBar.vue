<script lang="ts" setup>
import { ref } from 'vue'

import AppButton from '@/components/shared/AppButton.vue'
import AppInput from '@/components/shared/AppInput.vue'

defineProps({
  placeholder: {
    type: String,
    default: 'По умолчанию'
  },
  countPlaceholder: {
    type: String,
    default: 'Кол-во сущностей'
  },
  parallelsPlaceholder: {
    type: String,
    default: 'Кол-во запросов'
  }
})

const data = ref({
  search: '',
  count: '',
  parallels: ''
})
const handleInputChange = (
  value: string,
  type: 'search' | 'count' | 'parallels'
) => {
  data.value[type] = value
}
</script>

<template>
  <div class="search">
    <div class="search-group">
      <AppInput
        :placeholder="placeholder"
        :model-value="data.search"
        @update:model-value="handleInputChange($event, 'search')"
        class="input"
      />
      <AppInput
        :placeholder="countPlaceholder"
        :model-value="data.count"
        type="number"
        @update:model-value="handleInputChange($event, 'count')"
        class="input input-short"
      />
      <AppInput
        :placeholder="parallelsPlaceholder"
        :model-value="data.parallels"
        type="number"
        @update:model-value="handleInputChange($event, 'parallels')"
        class="input input-short"
      />
    </div>
    <AppButton variant="primary" class="search-button">Начать</AppButton>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px 7px;

  width: 100%;
}

.search-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 7px;

  width: 100%;
}

.search-button {
  height: 32px;
  min-width: 200px;
}

.input {
  flex-grow: 1;

  display: block;
  width: 100%;
}

.input-short {
  flex-grow: 0;
  flex-shrink: 0;

  height: 27px;

  width: 170px;
}
</style>
