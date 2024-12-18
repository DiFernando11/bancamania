export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export interface ApiRequestOptions<T> {
  url: string
  method?: HttpMethod
  data?: T
  params?: Record<string, unknown>
  headers?: Record<string, string>
  successStatus?: number
}

export interface ApiResponse<T> {
  data: {
    ok: boolean
    data: T
  }
  status: number
  statusText: string
}
