import express from 'express'

import { bootstrap } from '@/crawler-module'
import { getFileContent, getFiles } from '@/lib/files'

const routes = express.Router()

routes.get('/api/analyzes', (req, res) => {
  const files = getFiles('../../public/analyzes')
  const content = files.map(
    file =>
      JSON.parse(getFileContent(`../../public/analyzes/${file}`) || '{}')
        ?.data || null
  )

  return res.status(200).json({ data: content, error: null })
})

routes.post('/api/analyze', async (req, res) => {
  const { requests, count } = req.body
  await bootstrap({ count, requests })

  return res.status(200).json({ data: null, error: null })
})

export { routes }
