import React from 'react'
import { useI18Text } from '@/application/hooks/commons'
import { Icon, Text } from '@/ui/atoms'
import OptionsRight from './optionsRight'

const Header = () => {
  const t = useI18Text('commonAriaLabel')

  return (
    <header
      aria-label={t('header')}
      className='px-4 col-span-2 flex items-center shadow-bottom-accent -100'
    >
      <div className='flex gap-2 justify-center items-center'>
        <Icon name='Logo' />
        <Text>BancaMania</Text>
      </div>
      <OptionsRight />
    </header>
  )
}

export default Header
