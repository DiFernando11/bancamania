'use client'
import { useModalStore } from '@/application/zustand'

export const useModal = () => {
  const { openModal, closeModal, isVisible, destroyModal } = useModalStore()

  return {
    closeModal,
    destroyModal,
    isVisible,
    openModal,
  }
}
