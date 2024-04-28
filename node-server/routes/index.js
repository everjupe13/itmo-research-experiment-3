import express from 'express'

import { getFileContent, getFiles } from '../utils/files.js'

const routes = express.Router()

routes.get('/api/analyzes', (req, res) => {
  const files = getFiles('../public/analyzes')
  const content = files.map(
    file => JSON.parse(getFileContent(`../public/analyzes/${file}`))?.data
  )

  console.log(files, content)

  res.status(200).json({ data: content, error: null })
})

routes.get('/api/analyze', (req, res) => {
  const query = req.query
  console.log(query)

  res.status(200).json({ data: null, error: null })
})

routes.post('/api/analyze', (req, res) => {
  const { query } = req.body
})

export { routes }
