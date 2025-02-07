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
