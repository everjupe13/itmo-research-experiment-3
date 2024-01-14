import fs from 'node:fs'

class LoggerServiceSingleton {
  constructor() {}

  start() {
    this.fileName = Date.now()

    try {
      fs.writeFileSync(
        `results/${this.fileName}.txt`,
        'Experiment, Requests, Time\n\n'
      )
    } catch (error) {
      console.log(error)
    }
  }

  log({ name, time, requests }) {
    const data = `${name}, ${requests}, ${time} \n`

    try {
      fs.appendFileSync(`results/${this.fileName}.txt`, data)
    } catch (error) {
      console.log(error)
    }
  }
}

const LoggerService = new LoggerServiceSingleton()
export { LoggerService }
