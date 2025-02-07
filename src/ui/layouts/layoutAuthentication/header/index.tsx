'use client'
import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks/commons'
import { useModal } from '@/shared/hooks'
import { Icon, Text } from '@/ui/atoms'
import { Modal, ModalMenuBottom } from '@/ui/molecules'
import OptionsRight from './optionsRight'

const Header = () => {
  const t = useI18Text('commonAriaLabel')
  const { openModal } = useModal()

  return (
    <header
      aria-label={t('header')}
      className={classNames(
        'px-4 flex items-center shadow-bottom-accent bg-bg-translucent-100 rounded-b-3xl',
        'row-start-1 row-end-2 col-span-1',
        'sm:col-span-2'
      )}
    >
      <div
        className='flex gap-2 justify-center items-center'
        onClick={() => openModal(<ModalMenuBottom />)}
      >
        <Icon name='Logo' />
        <Text>BancaMania</Text>
      </div>
      <OptionsRight />
    </header>
  )
}

export default Header
