import { create } from 'zustand'
import { ModalState } from './types'

// Store for modal state
export const useModalStore = create<ModalState>(set => ({
  backgroundClassName: null,
  closeModal: () =>
    set({
      backgroundClassName: null,
      content: null,
      isOpen: false,
      onCloseBackground: undefined,
    }),
  content: null,
  isOpen: false,
  onCloseBackground: undefined,
  openModal: (content, options) =>
    set({
      backgroundClassName: options?.backgroundClassName,
      content,
      isOpen: true,
      onCloseBackground: options?.onCloseBackground,
    }),
}))
