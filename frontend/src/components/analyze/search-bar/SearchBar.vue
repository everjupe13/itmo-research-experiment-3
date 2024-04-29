<script lang="ts" setup>
import { computed, ref } from 'vue'

import AppButton from '@/components/shared/AppButton.vue'
import AppInput from '@/components/shared/AppInput.vue'
import { useAnalyze } from '@/composables/useAnalyze'

const { create, fetchState, load } = useAnalyze()

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
  requests: ''
})
const handleInputChange = (
  value: string,
  type: 'search' | 'count' | 'requests'
) => {
  data.value[type] = value
}

const handleSubmit = async () => {
  const handledCount = Number.parseInt(data.value.count, 10)
  const handledRequests = Number.parseInt(data.value.requests, 10)

  data.value = {
    search: '',
    count: '',
    requests: ''
  }

  await create({ count: handledCount, requests: handledRequests })
  if (!fetchState.value.load) {
    await load()
  }
}

const loading = computed(() => {
  return fetchState.value.create
})
</script>

<template>
  <form @submit.prevent="handleSubmit" class="search">
    <div class="search-group">
      <AppInput
        :placeholder="placeholder"
        :model-value="data.search"
        readonly
        :style="{ opacity: '0.4' }"
        class="input"
        @update:model-value="handleInputChange($event, 'search')"
      />
      <AppInput
        :placeholder="countPlaceholder"
        :model-value="data.count"
        :loading="loading"
        type="number"
        class="input input-short"
        @update:model-value="handleInputChange($event, 'count')"
      />
      <AppInput
        :placeholder="parallelsPlaceholder"
        :model-value="data.requests"
        :loading="loading"
        type="number"
        class="input input-short"
        @update:model-value="handleInputChange($event, 'requests')"
      />
    </div>
    <AppButton
      :loading="loading"
      :disabled="loading"
      type="submit"
      variant="primary"
      class="search-button"
    >
      Начать
    </AppButton>
  </form>
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
