import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import CardProduct from '..'
import { BackBankingCardProps } from './types'

const BackBankingCard = ({
  className,
  onClick,
  isLoading,
  nextStepComponent,
  footerRightComponent,
  cv,
  validThru,
  name,
}: BackBankingCardProps) => {
  const t = useI18Text('tarjetas')

  return (
    <CardProduct
      onClick={onClick}
      className={classNames(className, 'p-0 flex flex-col h-full')}
    >
      <Box className='w-full'>
        <Text
          className='px-4 pt-4 text-center'
          textType='font_8_fw_bold_fm_rob'
        >
          {t('propBanca')}
        </Text>
        <Box className='w-full h-10 bg-comun-card-wave' />
      </Box>
      <Box className='flex-1 p-4 w-full flex justify-between'>
        <Box className='flex flex-col justify-between'>
          <CardProduct.ValidThru isLoading={isLoading} validThru={validThru} />
          <CardProduct.CvText isLoading={isLoading} cv={cv} />
          <CardProduct.NameOwner
            textType='font_20_fw_bold_fm_rob'
            isLoading={isLoading}
            name={name}
          />
        </Box>
        <Box className='flex flex-col justify-between'>
          {nextStepComponent ? nextStepComponent : <Box></Box>}
          {footerRightComponent}
        </Box>
      </Box>
    </CardProduct>
  )
}

export default BackBankingCard
