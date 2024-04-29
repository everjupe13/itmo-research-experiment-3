import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const getFiles = (dir: string): string[] => {
  const files = fs
    .readdirSync(path.join(__dirname, dir), { withFileTypes: true })
    .filter(item => !item.isDirectory())
    .map(item => item.name)

  return files
}

export const getFileContent = (dir: string): string => {
  const file = fs.readFileSync(path.resolve(__dirname, dir), 'utf8')
  return file
}

export const setFileContent = (dir: string, content: string): void => {
  fs.writeFileSync(path.resolve(__dirname, dir), content)
}

export const appendFileContent = (dir: string, content: string): void => {
  fs.appendFileSync(path.resolve(__dirname, dir), content)
}
