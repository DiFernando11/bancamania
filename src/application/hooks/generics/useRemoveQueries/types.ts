export interface InvalidateParams {
  queryKey: string | unknown[]
  refetchType?: 'active' | 'inactive' | 'all'
  exact?: boolean
}
