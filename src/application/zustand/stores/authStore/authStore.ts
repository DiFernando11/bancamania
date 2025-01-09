'use client'
import { create } from 'zustand'
import { HasValidCode } from '@/shared'
import { definitions } from './definitions'
import { AuthStore } from './types'
import { createReducer, createReducerLs } from '../../reducers'
import { flushStoredValue } from '../../reducers/createReducerLs'

export const useAuthStore = create<AuthStore>(set => ({
  ...createReducer(definitions.phoneAuth, null, set),
}))

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

export default useAuthStore
