import { ReactNode } from 'react'

interface ModalOptions {
  backgroundClassName?: string
  onCloseBackground?: () => void
}

export interface ModalState {
  backgroundClassName: string | null
  content: ReactNode | null
  isOpen: boolean
  isVisible: boolean
  onCloseBackground?: () => void
  openModal: (content: ReactNode, options?: ModalOptions) => void
  closeModal: () => void
  destroyModal: () => void
}

export interface GlobalStoreState {
  locale: string | null
  setLocale: (locale: string) => void
}

export interface GlobalLoadingState {
  globalLoading: boolean
  loadingStates: Map<string, boolean>
  verifyStatesLoading: (id: string, loading: boolean) => void
}
