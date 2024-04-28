import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const getFiles = dir => {
  const files = fs
    .readdirSync(path.join(__dirname, dir), { withFileTypes: true })
    .filter(item => !item.isDirectory())
    .map(item => item.name)

  return files
}

export const getFileContent = dir => {
  const file = fs.readFileSync(path.join(__dirname, dir), 'utf8')
  return file
}
