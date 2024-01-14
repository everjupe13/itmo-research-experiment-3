const formatDateForTerminalStamp = () => {
  return `${new Date().toTimeString().split(' ')[0]}: `
}

export const terminal = {
  startLine() {
    console.log('ITMO | Bakirov Ilya P4208 | 2024\n\n\n')
    console.log(formatDateForTerminalStamp() + "Let's start the experiment")
  },
  logLine({ name, idx, count }) {
    console.log(
      formatDateForTerminalStamp() +
        `experiment #${idx}, ` +
        `name: ${name}, ` +
        `requests: ${count}`
    )
  },
  endLine() {
    console.log(
      formatDateForTerminalStamp() +
        "Successful ending, Congrats, it's been a long time"
    )
  }
}
