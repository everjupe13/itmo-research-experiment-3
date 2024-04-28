export type Maybe<T> = T | null

export type ApiResponse<T> = {
  data: Maybe<T>
  error: Maybe<string>
}
