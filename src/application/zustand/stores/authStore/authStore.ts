'use client'
import { HasValidCode } from '@/shared'
import { createReducerLs } from '../../reducers'
import { flushStoredValue } from '../../reducers/createReducerLs'

const initialAuthPersist = {
  hasValidCode: null,
  hasValidCodeGoogle: null,
}

export const useAuthStoreLs = () => {
  const STORAGE_KEY = 'auth-persist-store'

  return {
    ...createReducerLs(
      STORAGE_KEY,
      'hasValidCode',
      initialAuthPersist.hasValidCode as HasValidCode | null
    ),
    flushAll: () => flushStoredValue(STORAGE_KEY),
  }
}
