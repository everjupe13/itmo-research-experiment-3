import axios, { AxiosError } from 'axios'
import { computed, ComputedRef, ref } from 'vue'

import { getCurrentUrl } from '@/utils'

import { ApiResponse, Maybe } from '../types'

type UseRequestError = {
  get: Maybe<string>
  post: Maybe<string>
}

type UseRequestConfigOptions = {
  query: { [key: string]: string }
}

type UsePostRequestConfigOptions = {
  data: { [key: string]: string | number | boolean }
}

export interface UseRequest {
  loading: ComputedRef<boolean>
  error: ComputedRef<UseRequestError>

  get: <T>(
    url: string,
    options?: UseRequestConfigOptions
  ) => Promise<ApiResponse<T>>
  post: <T>(
    url: string,
    options?: UsePostRequestConfigOptions
  ) => Promise<ApiResponse<T>>
}

const url = getCurrentUrl({ port: '8080' })
const API_URL = `${url.protocol}//${url.host}/api`

const buildUrl = (url: string, query?: { [key: string]: string }) => {
  const isRelativeUrl = url.startsWith('/')
  const fullUrl = isRelativeUrl ? `${API_URL}${url}` : url
  const urlInstance = new URL(fullUrl)

  if (query) {
    for (const key in query) {
      urlInstance.searchParams.append(key, query[key])
    }
  }

  return urlInstance
}

export function useRequest() {
  const loading = ref(false)
  const error = ref<UseRequestError>({ get: null, post: null })

  const get = async <T>(url: string, options?: UseRequestConfigOptions) => {
    error.value.get = null
    loading.value = true

    const fullUrl = buildUrl(url, options?.query)

    try {
      const request = await axios.get<T>(fullUrl.toString())
      loading.value = false

      return {
        data: request.data,
        error: null
      }
    } catch (catchedError: unknown) {
      const typedError = catchedError as AxiosError

      loading.value = true
      error.value.get = typedError.message

      return {
        data: null,
        error: typedError.message
      }
    }
  }

  const post = async <T>(
    url: string,
    options?: UsePostRequestConfigOptions
  ) => {
    error.value.post = null
    loading.value = true

    const fullUrl = buildUrl(url)

    try {
      const request = await axios.post<T>(fullUrl.toString(), options?.data)
      loading.value = false

      return {
        data: request.data,
        error: null
      }
    } catch (catchedError: unknown) {
      const typedError = catchedError as AxiosError

      loading.value = true
      error.value.post = typedError.message

      return {
        data: null,
        error: typedError.message
      }
    }
  }

  return {
    error: computed(() => error.value),
    loading: computed(() => loading.value),

    get,
    post
  }
}
