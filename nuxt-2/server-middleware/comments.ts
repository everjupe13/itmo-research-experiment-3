import { Request, Response } from 'express'
import data250 from '../data/comments250.json'
import data500 from '../data/comments500.json'
import data1000 from '../data/comments1000.json'

const app = require('express')()

app.all('/:count', (req: Request, res: Response) => {
  const count = req.params.count || 0

  switch (Number(count)) {
    case 250: {
      return res.status(200).json(data250)
    }
    case 500: {
      return res.status(200).json(data500)
    }
    case 1000: {
      return res.status(200).json(data1000)
    }
    default: {
      return res.status(200).json([])
    }
  }
})

module.exports = app