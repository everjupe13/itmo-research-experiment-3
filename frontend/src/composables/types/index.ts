export type Maybe<T> = T | null

export type ApiResponse<T = null> = {
  data: Maybe<T>
  error: Maybe<string>
}
