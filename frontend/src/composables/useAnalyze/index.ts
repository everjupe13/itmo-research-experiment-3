import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'

import { ApiResponse } from '../types'
import { useRequest } from '../useRequest'
import { AnalyzeInterface } from './types'

export interface UseAnalyzeLoadDto {
  autoRefetch?: boolean
}
export interface UseAnalyzeCreateDto {
  count?: number
  requests?: number
}

export interface UseAnalyzeStore {
  items: AnalyzeInterface[][]
}

const state = reactive<UseAnalyzeStore>({
  items: []
})

export function useAnalyze() {
  const data = computed(() => state.items)
  const timers = ref<Record<string, number | null>>({
    load: null
  })
  const loading = ref(false)
  const fetchState = ref({
    load: false,
    create: false
  })

  onMounted(() => {
    load({ autoRefetch: true })
  })

  const load = async ({ autoRefetch }: UseAnalyzeLoadDto = {}) => {
    loading.value = true
    fetchState.value.load = true

    try {
      const response =
        await useRequest().get<ApiResponse<AnalyzeInterface[][]>>('/analyzes')
      if (response.data && response.data.data) {
        state.items = response.data.data
      }
      loading.value = false
      fetchState.value.load = false
    } catch {
      loading.value = false
      fetchState.value.load = false
    } finally {
      if (autoRefetch) {
        timers.value.load = setTimeout(() => load({ autoRefetch }), 10_000)
      }
    }
  }

  const create = async ({ count, requests }: UseAnalyzeCreateDto = {}) => {
    loading.value = true
    fetchState.value.create = true

    try {
      await useRequest().post<ApiResponse>('/analyze', {
        data: {
          count: count || 250,
          requests: requests || 100
        }
      })
      loading.value = false
      fetchState.value.create = false
    } catch {
      loading.value = false
      fetchState.value.create = false
    }
  }

  onUnmounted(() =>
    Object.values(timers.value).forEach(timer => timer && clearTimeout(timer))
  )

  return {
    load,
    create,
    data,
    loading,
    fetchState
  }
}
