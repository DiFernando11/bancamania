'use client'
import { useModalStore } from '@/application/zustand'

export const useModal = () => {
  const { openModal, closeModal } = useModalStore()

  return { closeModal, openModal }
}
