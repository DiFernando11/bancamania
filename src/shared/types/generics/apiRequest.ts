export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export interface ApiRequestOptions<T> {
  url: string
  method?: HttpMethod
  data?: T
  params?: Record<string, unknown>
  headers?: Record<string, string>
  successStatus?: number
  responseType?: 'json' | 'blob' | 'text'
}

export interface ApiResponse<T> {
  data: {
    ok: boolean
    data: T
  }
  status: number
  statusText: string
}

export interface ErrorField {
  errors: string[]
  field: string
}

export interface ApiResponseError {
  message: string
  ok: boolean
  statusCode: number
  error: string | ErrorField[]
}

export interface PaginationData {
  currentPage: number
  isLastPage: boolean
  totalItems: number
  totalPages: number
  nextCursor?: number
  prevCursor?: number
}
