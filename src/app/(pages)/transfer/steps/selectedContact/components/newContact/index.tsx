import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { IconText } from '@/ui/molecules'
import { NewAccountProps } from './types'
import { STEPS } from '../../../contants'

const NewContact = ({ goToStep }: NewAccountProps) => {
  const t = useI18Text('transfer')

  return (
    <Box
      className={classNames(
        'border-2 border-primary-100 rounded-lg',
        'p-4 flex justify-between items-center cursor-pointer'
      )}
      onClick={() => goToStep(STEPS.validateAccount)}
    >
      <IconText
        text={t('addContact')}
        classIcon={classNames('w-10 h-10')}
        nameIcon='AddContact'
      />
    </Box>
  )
}

export default NewContact
