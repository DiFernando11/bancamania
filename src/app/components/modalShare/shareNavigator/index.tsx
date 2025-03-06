'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Button, Icon, Spinner, Text } from '@/ui/atoms'
import { ButtonActions } from '../types'

const ShareNavigator = (props: ButtonActions) => {
  const t = useI18Text()

  return (
    <Button
      {...props}
      variant='secondary'
      className='flex gap-4 justify-center items-center col-span-3 sm:col-span-1'
    >
      {props.disabled ? (
        <Spinner sizeSpinner='w-8 h-8' />
      ) : (
        <Icon name='Share' className='w-8 h-8' />
      )}
      <Text> {t('others')}</Text>
    </Button>
  )
}

export default ShareNavigator
