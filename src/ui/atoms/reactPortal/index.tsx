'use client'
import classNames from 'classnames'
import React from 'react'
import { createPortal } from 'react-dom'
import { useModalStore } from '@/application/zustand'

const ReactPortal: React.FC = () => {
  const {
    isOpen,
    content,
    closeModal,
    backgroundClassName,
    onCloseBackground,
  } = useModalStore()
  if (!isOpen) return null

  const handleCloseBackground = () => {
    if (onCloseBackground) {
      onCloseBackground()
    } else {
      closeModal()
    }
  }

  return createPortal(
    <div
      role='dialog'
      aria-modal='true'
      onClick={handleCloseBackground}
      className={classNames(
        'fixed inset-0 flex items-center justify-center cursor-pointer'
      )}
      style={{
        backgroundColor: backgroundClassName ?? 'rgba(0, 0, 0, 0.7)',
      }}
    >
      {content}
    </div>,
    document.body
  )
}

export default ReactPortal
