import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Icon, Text } from '@/ui/atoms'
import { PresentationLogoProps } from './types'

const PresentationLogo = ({
  className,
  iconClass,
  textType = 'font_30_48_fw_bold_fm_rob',
}: PresentationLogoProps) => {
  const t = useI18Text()

  return (
    <Box
      className={classNames(
        className,
        'bg-gradient-primary',
        'flex flex-col justify-center items-center'
      )}
    >
      <Icon name='Logo' className={classNames(iconClass)} />
      <Text textType={textType}>{t('titlePage')}</Text>
    </Box>
  )
}

export default PresentationLogo
