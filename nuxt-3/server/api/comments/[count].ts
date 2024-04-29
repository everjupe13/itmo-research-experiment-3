import { customAlphabet, nanoid } from 'nanoid'

import { commentFactory } from '@/utils'

export default defineEventHandler(event => {
  const count = getRouterParam(event, 'count') || 0
  const query = getQuery(event)

  const alhpabet = query.alhpabet as string
  const customNanoid = alhpabet ? customAlphabet(alhpabet, 21) : nanoid

  const generated = Array.from({ length: Number(count) }).map(() =>
    commentFactory(customNanoid)
  )

  setResponseStatus(event, 200)
  return { data: generated }
})
