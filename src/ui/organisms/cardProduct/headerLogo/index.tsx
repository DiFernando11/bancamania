import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Icon, Text } from '@/ui/atoms'

const HeaderLogo = () => {
  const t = useI18Text()

  return (
    <Box className='flex items-center gap-2'>
      <Icon name='Logo' className='w-12 h-12' />
      <Text textType='font_14_fw_bold_fm_rob'>
        {t('titlePage').toUpperCase()}
      </Text>
    </Box>
  )
}

export default HeaderLogo
