import React from 'react'
import { Button, Icon, Spinner } from '@/ui/atoms'
import { ButtonActions } from '../types'

const ShareWhatsapp = (props: ButtonActions) => {
  return (
    <Button {...props} variant='secondary' className='flex justify-center'>
      {props.disabled ? (
        <Spinner sizeSpinner='w-8 h-8' />
      ) : (
        <Icon name='WhatsApp' className='w-10 h-10' />
      )}
    </Button>
  )
}

export default ShareWhatsapp
