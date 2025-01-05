import React from 'react'
import { useI18Text } from '@/application/hooks/commons'

const Header = () => {
  const t = useI18Text('commonAriaLabel')

  return (
    <header aria-label={t('header')} className='p-4 col-span-4 border'>
      Header
    </header>
  )
}

export default Header
