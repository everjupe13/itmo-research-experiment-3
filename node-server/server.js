import cors from 'cors'
import express from 'express'

import { routes } from './routes/index.js'

const app = express()
app.use(cors())
app.use(routes)

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
