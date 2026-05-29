import tinyDateFormat from 'tinydateformat2'

export type LogLevel = 'info' | 'warn' | 'error'

export interface LogEntry {
  id: number
  timestamp: number
  level: LogLevel
  message: string
  formattedTime: string
}

const MAX_LOGS = 500
const logs: LogEntry[] = []
let nextId = 0

function add(level: LogLevel, message: string): void {
  logs.push({
    id: nextId++,
    timestamp: Date.now(),
    level,
    message,
    formattedTime: tinyDateFormat(),
  })
  if (logs.length > MAX_LOGS) {
    logs.shift()
  }
}

export const logger = {
  info: (msg: string) => add('info', msg),
  warn: (msg: string) => add('warn', msg),
  error: (msg: string) => add('error', msg),
  getAll: (): readonly LogEntry[] => logs,
  clear: (): void => {
    logs.length = 0
    nextId = 0
  },
}
