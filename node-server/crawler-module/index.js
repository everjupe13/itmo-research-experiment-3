import {
  EXPERIMENTS,
  PER_REQ_DELAY,
  REQUEST_COUNTS_PER_STEP
} from './config.js'
import { api } from './lib/api.js'
import { LoggerService } from './logger.service.js'
import { TrackerService } from './tracker.service.js'
import { sleep } from './utils/index.js'
import { terminal } from './utils/terminal.js'

export const bootstrap = async () => {
  terminal.startLine()
  LoggerService.start()

  for (const EXPERIMENT of EXPERIMENTS) {
    for (const REQUEST_STEP of REQUEST_COUNTS_PER_STEP) {
      terminal.logLine({
        idx: EXPERIMENTS.indexOf(EXPERIMENT) + 1,
        name: EXPERIMENT.name,
        count: REQUEST_STEP
      })

      TrackerService.start()

      const promisesLength = REQUEST_STEP
      await Promise.all(
        Array.from({ length: promisesLength }, () => api(EXPERIMENT.url))
      )

      const time = TrackerService.end()
      LoggerService.log({
        name: EXPERIMENT.name,
        requests: promisesLength,
        time
      })

      await sleep(PER_REQ_DELAY)
    }
  }

  terminal.endLine()
}
