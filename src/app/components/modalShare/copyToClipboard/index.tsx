'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Button, Icon, Spinner, Text } from '@/ui/atoms'
import { ButtonActions } from '../types'

const CopyToClipboard = (props: ButtonActions) => {
  const t = useI18Text()

  return (
    <Button
      {...props}
      className='flex gap-4 justify-center items-center'
      variant='secondary'
    >
      {props.disabled ? (
        <Spinner sizeSpinner='w-8 h-8' />
      ) : (
        <Icon name='Copy' className='w-8 h-8' />
      )}
      <Text> {t('copy')}</Text>
    </Button>
  )
}

export default CopyToClipboard
