import axios from 'axios'

export const api = async url => {
  try {
    const { data } = await axios.get(`${url}`)
    if (data) {
      return data
    }
  } catch {
    console.log('error')
  }
}
