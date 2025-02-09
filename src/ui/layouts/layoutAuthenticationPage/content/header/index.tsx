import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { LayoutPageAuthHeader } from '../../types'

const Header = ({ isContextualMenu, i18nTitle }: LayoutPageAuthHeader) => {
  const t = useI18Text(i18nTitle)

  return (
    <div className='flex items-center '>
      <h1>{t('title')}</h1>
      {isContextualMenu && (
        <span className={classNames('ml-auto flex', 'lg:hidden')}>...</span>
      )}
    </div>
  )
}

export default Header
