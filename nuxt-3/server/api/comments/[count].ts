import data250 from '@/data/comments250.json'
import data500 from '@/data/comments500.json'
import data1000 from '@/data/comments1000.json'

export default defineEventHandler((event) => {
  const count = getRouterParam(event, 'count') || 0

  switch (Number(count)) {
    case 250: {
      return data250
    }
    case 500: {
      return data500
    }
    case 1000: {
      return data1000
    }
    default: {
      return []
    }
  }
})