export interface AnalyzeInterface {
  id: number
  experiment_date?: string
  name: string
  items: {
    id: number
    created_at: string
    time: string
  }[]
}
