'use client'
import classNames from 'classnames'
import React from 'react'
import { createPortal } from 'react-dom'
import { useModalStore } from '@/application/zustand'

const ReactPortal: React.FC = () => {
  const { isOpen, content, onCloseBackground } = useModalStore()
  if (!isOpen) return null

  const handleCloseBackground = () => {
    if (onCloseBackground) {
      onCloseBackground()
    }
  }

  return createPortal(
    <div
      role='dialog'
      aria-modal='true'
      onClick={handleCloseBackground}
      className={classNames(
        'fixed inset-0 flex items-center justify-center cursor-pointer z-[9999]',
        'bg-[radial-gradient(circle,_rgba(46,125,50,0.5)_50%,_rgba(97,173,94,0)_100%)]',
        'backdrop-blur-md z-[10000]'
      )}
    >
      {content}
    </div>,
    document.body
  )
}

export default ReactPortal
