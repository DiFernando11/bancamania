import { create } from 'zustand'
import { GlobalLoadingState, GlobalStoreState, ModalState } from './types'

export const useModalStore = create<ModalState>(set => ({
  backgroundClassName: null,
  closeModal: () => set({ isVisible: false }),
  content: null,
  destroyModal: () =>
    set({
      backgroundClassName: null,
      content: null,
      isOpen: false,
      isVisible: false,
      onCloseBackground: undefined,
    }),
  isOpen: false,
  isVisible: false,
  onCloseBackground: undefined,
  openModal: (content, options) =>
    set({
      backgroundClassName: options?.backgroundClassName || null,
      content,
      isOpen: true,
      isVisible: true,
      onCloseBackground: options?.onCloseBackground,
    }),
}))

export const useGlobalStore = create<GlobalStoreState>(set => ({
  locale: null,
  setLocale: locale => set({ locale }),
}))

export const useGlobalLoadingStore = create<GlobalLoadingState>(set => ({
  globalLoading: false,
  loadingStates: new Map(),
  verifyStatesLoading: (id, loading) => {
    set(state => {
      const newLoadingStates = new Map(state.loadingStates)
      if (loading) {
        newLoadingStates.set(id, true)
      } else {
        newLoadingStates.delete(id)
      }

      return {
        globalLoading: newLoadingStates.size > 0,
        loadingStates: newLoadingStates,
      }
    })
  },
}))
