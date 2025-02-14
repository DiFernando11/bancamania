'use client'
import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Icon, Text } from '@/ui/atoms'
import { ChangeLanguageProps } from './types'

const ChangeLanguageButton = ({
  handleClick,
  className,
  locale,
}: ChangeLanguageProps) => {
  const t = useI18Text()

  return (
    <button
      onClick={handleClick}
      className={classNames(
        'absolute left-0 rounded-br-3xl p-4 shadow-bottom-accent',
        'flex justify-center items-center gap-3',
        className
      )}
    >
      <Icon name='Language' />
      <Text>{t('languague', { locale })}</Text>
    </button>
  )
}

export default ChangeLanguageButton
