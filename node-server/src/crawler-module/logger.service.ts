import { nanoid } from 'nanoid'

import { appendFileContent, setFileContent } from '@/lib/files'

class LoggerServiceSingleton {
  fileName: number
  delayedData: Array<string | unknown> | null

  constructor() {}

  private createLogFile() {
    try {
      setFileContent(
        `../../results/${this.fileName}.txt`,
        'Experiment, Requests, Time\n\n'
      )
    } catch (error) {
      console.log(error)
    }
  }

  private createResultFile() {
    try {
      setFileContent(`../../public/analyzes/${this.fileName}.json`, '')
    } catch (error) {
      console.log(error)
    }
  }

  private saveToDelayedData({ name, time, requests, count }) {
    const data = {
      id: nanoid(),
      start_date: Date.now(),
      requests: requests,
      count,
      name,
      time
    }

    this.delayedData = this.delayedData ? [...this.delayedData, data] : [data]
  }

  start() {
    this.delayedData = null
    this.fileName = Date.now()

    this.createLogFile()
    this.createResultFile()
  }

  log({ name, time, requests, count }) {
    this.saveToDelayedData({ name, time, requests, count })

    const data = `${name} - ${count}, ${requests}, ${time} \n`
    try {
      appendFileContent(`../../results/${this.fileName}.txt`, data)
    } catch (error) {
      console.log(error)
    }
  }

  end() {
    try {
      const content = JSON.stringify({ data: this.delayedData }, null, 2)
      setFileContent(`../../public/analyzes/${this.fileName}.json`, content)
    } catch (error) {
      console.log(error)
    }
  }
}

const LoggerService = new LoggerServiceSingleton()
export { LoggerService }
