import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue'

import { useRequest } from '../useRequest'

export interface UseAnalyzeLoadDto {
  autoRefetch?: boolean
}
export interface AnalyzeInterface {
  created_at?: string
  stopped_at?: string
  spent_time?: string
  experiment_name?: string
}

export interface UseAnalyzeStore {
  items: AnalyzeInterface[]
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

  onMounted(() => {
    load({ autoRefetch: false })
  })

  const load = async ({ autoRefetch }: UseAnalyzeLoadDto = {}) => {
    loading.value = true

    try {
      const response = await useRequest().get<AnalyzeInterface[]>('/analyzes')
      if (response.data) {
        state.items = response.data
      }
      loading.value = false
    } catch {
      loading.value = false
    } finally {
      if (autoRefetch) {
        timers.value.load = setTimeout(() => load({ autoRefetch }), 10_000)
      }
    }
  }

  onUnmounted(() =>
    Object.values(timers.value).forEach(timer => timer && clearTimeout(timer))
  )

  watch(
    () => state.items,
    () => {
      console.log(state.items)
    }
  )

  return {
    load,
    data
  }
}
