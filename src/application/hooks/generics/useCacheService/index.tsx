import { useLazyGetDataByKey } from '../useLazyGetDataByKey'
import { useRemoveQueries } from '../useRemoveQueries'
import { InvalidateParams } from '../useRemoveQueries/types'

const useCacheService = ({ key }: { key: string }) => {
  const { invalidate } = useRemoveQueries()
  const getData = useLazyGetDataByKey()

  const removeQuery = (
    params: Omit<InvalidateParams, 'queryKey'> & { queryParams?: unknown[] }
  ) => {
    const queryKey = [key, ...(params.queryParams || [])].filter(Boolean)
    invalidate({ ...params, queryKey })
  }

  const getDataLazy = <T,>(params: unknown[] = []): T | undefined => {
    const getDataResponse = getData([key, ...params])

    return getDataResponse as T | undefined
  }

  return { getDataLazy, removeQuery }
}

export default useCacheService
