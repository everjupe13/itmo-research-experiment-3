class TrackerServiceSingleton {
  constructor() {
    this.reset()
  }

  start() {
    this.reset()
    this.startTime = Date.now()
  }

  end() {
    this.endTime = Date.now()
    return this.timePeriodString
  }

  reset() {
    this.startTime = null
    this.endTime = null
  }

  get timePeriod() {
    if (!this.startTime || !this.endTime) {
      return 0
    }

    return this.endTime - this.startTime
  }

  get timePeriodString() {
    return this.timePeriod > 1000
      ? `${(this.timePeriod / 1000).toFixed(3)}s`
      : `${this.timePeriod.toFixed(3)}ms`
  }
}

const TrackerService = new TrackerServiceSingleton()

export { TrackerService }
