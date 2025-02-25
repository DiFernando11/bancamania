import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import { LayoutPageAuthHeader } from '../../types'

const Header = ({ isContextualMenu, i18nTitle }: LayoutPageAuthHeader) => {
  const t = useI18Text(i18nTitle)

  return (
    <Box className='flex items-center '>
      <Text
        variant='h1'
        className='mb-5'
        textType='font_30_36_fw_bold_fm_rob_text-200'
      >
        {t('title')}
      </Text>
      {isContextualMenu && (
        <span className={classNames('ml-auto flex', 'lg:hidden')}>...</span>
      )}
    </Box>
  )
}

export default Header
