import { Request, Response } from 'express'
import { customAlphabet, nanoid } from 'nanoid'
import { commentFactory } from '../utils'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const app = require('express')()

app.get('/:count', (req: Request, res: Response) => {
  const count = req.params.count || 0
  const query = req.query

  const alhpabet = query.alhpabet as string
  const customNanoid = alhpabet ? customAlphabet(req.body, 21) : nanoid

  const generated = Array.from({ length: Number(count) }).map(() =>
    commentFactory(customNanoid)
  )

  res.status(200).json({ data: generated })
})

module.exports = app
