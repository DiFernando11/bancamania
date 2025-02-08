import { create } from 'zustand'
import { ModalState } from './types'

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
