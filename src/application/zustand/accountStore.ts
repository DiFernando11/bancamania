import { create } from 'zustand'

interface AccountState {
  balance: number
  increase: (by: number) => void
}

const useAccountStore = create<AccountState>()((set) => ({
  balance: 0,
  increase: (by) => set((state) => ({ balance: state.balance + by })),
}))


export default useAccountStore;