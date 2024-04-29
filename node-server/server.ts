import cors from 'cors'
import express from 'express'

import { routes } from './src/routes'

const config = [cors(), express.json(), express.urlencoded({ extended: true })]

const app = express()

app.use(config)
app.use(routes)

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
