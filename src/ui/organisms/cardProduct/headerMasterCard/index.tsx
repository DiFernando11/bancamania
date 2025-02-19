import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Icon, Text } from '@/ui/atoms'

const HeaderMasterCard = () => {
  const t = useI18Text('tarjetas')

  return (
    <Box className='-mt-2'>
      <Icon name='MasterCard' className='w-12 h-12' />
      <Text textType='font_14_fw_bold_fm_rob' className='text-center'>
        {t('debit').toUpperCase()}
      </Text>
    </Box>
  )
}

export default HeaderMasterCard
