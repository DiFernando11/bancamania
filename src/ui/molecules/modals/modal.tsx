import classNames from 'classnames'
import React, { CSSProperties } from 'react'
import { AnimationContainer, Text } from '@/ui/atoms'
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
    'bg-white flex flex-col cursor-default pointer-events-auto',
    'border-accent-200  dark:bg-bg-100',
    {
      'rounded-e-lg border-r-4': position === 'left',
      'rounded-l-lg border-l-4': position === 'right',
      'rounded-lg max-w-[600px] m-5  border-4': position === 'center',
      'rounded-t-2xl border-t-8': position === 'bottom',
    }
  )

  const animations = {
    bottom: { animate: { y: 0 }, initial: { y: '100%' } },
    center: { animate: { x: 0, y: 0 }, initial: { x: '200%' } },
    left: { animate: { x: 0 }, initial: { x: '-100%' } },
    right: { animate: { x: 0 }, initial: { x: '100%' } },
  }

  return (
    <div className={wrapperClasses}>
      <AnimationContainer
        className={modalClasses}
        style={styles}
        onClick={e => e.stopPropagation()}
        initial={animations[position]?.initial}
        animate={animations[position]?.animate}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </AnimationContainer>
    </div>
  )
}

const TitleModal = ({ title }: { title: string }) => (
  <Text textType='headingMedium' variant='h3'>
    {title}
  </Text>
)

const Header = ({ children, className }: ContentProps) => (
  <div className={classNames('border-b p-4 border-accent-100', className)}>
    {children}
  </div>
)

const Content = ({ children, className }: ContentProps) => (
  <div className={classNames('flex-grow p-4 border-accent-100', className)}>
    {children}
  </div>
)

const Footer = ({ children, className }: ContentProps) => (
  <div className={classNames('border-t p-4 border-accent-100', className)}>
    {children}
  </div>
)

Modal.Header = Header
Modal.Content = Content
Modal.Footer = Footer
Modal.Title = TitleModal

export default Modal
