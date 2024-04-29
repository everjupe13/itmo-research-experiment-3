import { api } from '@/lib/api'
import { terminal as Terminal } from '@/lib/terminal'
import { sleep } from '@/utils/index'

import { LoggerService as Logger } from './logger.service'
import { TrackerService as Tracker } from './tracker.service'

const NuxtServers = [
  {
    name: 'Nuxt2',
    url: 'http://localhost:3020'
  },
  {
    name: 'Nuxt3',
    url: 'http://localhost:3030'
  }
]

export const bootstrap = async ({ count, requests }) => {
  Terminal.startLine()
  Logger.start()

  const parallelRequestsCounts = [requests, requests * 2, requests * 4]
  for (const serverData of NuxtServers) {
    for (const parallelRequests of parallelRequestsCounts) {
      Terminal.logLine({
        idx: parallelRequestsCounts.indexOf(parallelRequests) + 1,
        name: serverData.name,
        count: parallelRequests
      })
      Tracker.start()

      const promisesLength = parallelRequests
      await Promise.all(
        Array.from({ length: promisesLength }, () =>
          api(`${serverData.url}/comments/${count}`)
        )
      )

      const time = Tracker.end()

      Logger.log({
        name: serverData.name,
        requests: promisesLength,
        count,
        time
      })

      await sleep(200)
    }
  }

  Logger.end()
  Terminal.endLine()
}
