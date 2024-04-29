import axios from 'axios'

export const api = async <T>(url: string) => {
  try {
    const { data } = await axios.get<T>(`${url}`)
    if (data) {
      return data
    }
  } catch {
    console.log('error')
  }
}
