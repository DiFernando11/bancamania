import { ReactNode } from 'react'

export interface ModalState {
  isOpen: boolean
  content: React.ReactNode | null
  backgroundClassName?: string | null
  onCloseBackground?: () => void
  openModal: (
    content: React.ReactNode,
    options?: { backgroundClassName?: string; onCloseBackground?: () => void }
  ) => void
  closeModal: () => void
}
