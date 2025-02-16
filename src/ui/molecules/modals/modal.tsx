'use client'
import classNames from 'classnames'
import { AnimatePresence } from 'framer-motion'
import React, { CSSProperties, useState } from 'react'
import { useModal } from '@/shared/hooks'
import { AnimationContainer, Box, Icon, Text } from '@/ui/atoms'
import { ContentProps, ModalProps } from './types'

const Modal = ({
  position = 'bottom',
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  children,
}: ModalProps) => {
  const isVertical = position === 'left' || position === 'right'
  const { closeModal, destroyModal, isVisible } = useModal()

  const styles: CSSProperties = {
    height: height || (isVertical ? '100vh' : 'auto'),
    maxHeight,
    maxWidth,
    minHeight: minHeight || (!isVertical ? '300px' : undefined),
    minWidth: minWidth || (isVertical ? '300px' : undefined),
    width: width || (isVertical ? 'auto' : '100%'),
  }

  const wrapperClasses = classNames('fixed inset-0 flex', {
    'justify-center items-center': position === 'center',
    'justify-end items-center': position === 'right',
    'justify-end items-end': position === 'bottom',
    'justify-start items-center': position === 'left',
  })

  const modalClasses = classNames(
    'flex flex-col cursor-default pointer-events-auto',
    'border-accent-200 bg-bg-100',
    {
      'rounded-e-lg border-r-4': position === 'left',
      'rounded-l-lg border-l-4': position === 'right',
      'rounded-lg max-w-[600px] m-5  border-4': position === 'center',
      'rounded-t-2xl border-t-8': position === 'bottom',
    }
  )

  const animations = {
    bottom: {
      animate: { y: 0 },
      exit: { y: '100%' },
      initial: { y: '100%' },
    },
    center: {
      animate: { x: 0, y: 0 },
      exit: { x: '200%' },
      initial: { x: '200%', y: 0 },
    },
    left: {
      animate: { x: 0 },
      exit: { x: '-100%' },
      initial: { x: '-100%' },
    },
    right: {
      animate: { x: 0 },
      exit: { x: '100%' },
      initial: { x: '100%' },
    },
  }

  return (
    <AnimatePresence
      onExitComplete={() => {
        destroyModal()
      }}
    >
      {isVisible && (
        <AnimationContainer
          key='overlay'
          className={wrapperClasses}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          onClick={closeModal}
        >
          <AnimationContainer
            key='modal'
            className={modalClasses}
            style={styles}
            onClick={e => e.stopPropagation()}
            initial={animations[position].initial}
            animate={animations[position].animate}
            exit={animations[position].exit}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {children}
          </AnimationContainer>
        </AnimationContainer>
      )}
    </AnimatePresence>
  )
}

const TitleModal = ({ title }: { title: string }) => (
  <Text textType='font_18_fw_bold_fm_rob_text-200' variant='h3'>
    {title}
  </Text>
)

const Header = ({ children, className }: ContentProps) => (
  <Box className={classNames('border-b p-4 border-accent-100', className)}>
    {children}
  </Box>
)

const Content = ({ children, className }: ContentProps) => (
  <Box className={classNames('flex-grow p-4 border-accent-100', className)}>
    {children}
  </Box>
)

const Footer = ({ children, className }: ContentProps) => (
  <Box className={classNames('border-t p-4 border-accent-100', className)}>
    {children}
  </Box>
)

const CerrarModal = () => {
  const { closeModal } = useModal()

  return (
    <Box onClick={closeModal} className='cursor-pointer'>
      <Icon name='Close' className='w-4 h-4' />
    </Box>
  )
}

Modal.Header = Header
Modal.Content = Content
Modal.Footer = Footer
Modal.Title = TitleModal
Modal.Cerrar = CerrarModal

export default Modal
