'use client'
import classNames from 'classnames'
import { useState } from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Icon, Text } from '@/ui/atoms'
import CardProduct from '../cardProduct'
import { CardAccountProps } from './types'

const CardAccount = ({
  textAccount = '',
  balance = '',
  className,
  onClick,
  isLoading,
}: CardAccountProps) => {
  const [isShow, setIsShow] = useState(true)

  const t = useI18Text('onBoarding')
  const tI18 = useI18Text()

  return (
    <CardProduct
      onClick={onClick}
      className={classNames(className, 'p-4 bg-account bg-primary-100')}
    >
      <CardProduct.HeaderCard>
        <Box className='flex flex-col'>
          <Icon name='Wallet' className='w-14 h-14 self-center' />
          <Text textType='font_16_fw_bold_fm_rob' className='break-all'>
            {t('savings')}
          </Text>
        </Box>
        <CardProduct.ShowBalance setIsShow={setIsShow} isShow={isShow} />
      </CardProduct.HeaderCard>
      <Box>
        <CardProduct.Balance
          balance={balance}
          isLoading={isLoading}
          isShow={isShow}
        />
        <CardProduct.FooterCard>
          <CardProduct.TextAccount
            isLoading={isLoading}
            isShow={isShow}
            textAccount={textAccount}
          />
          <Text textType='font_16_fw_bold_fm_rob' className='break-all'>
            {tI18('titlePage').toUpperCase()}
          </Text>
        </CardProduct.FooterCard>
      </Box>
    </CardProduct>
  )
}
export default CardAccount
