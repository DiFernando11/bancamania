'use client'
import classNames from 'classnames'
import { useState } from 'react'
import { useI18Text } from '@/application/hooks'
import { maskReplace } from '@/shared/utils/strings'
import { Box, Icon, Text } from '@/ui/atoms'
import { BitcoinSymbol } from '@/ui/molecules'
import CardProduct from '../cardProduct'
import { CardAccountProps } from './types'

const CardAccount = ({
  textAccount,
  balance,
  className,
  onClick,
}: CardAccountProps) => {
  const [isShow, setIsShow] = useState(true)

  const t = useI18Text('onBoarding')

  return (
    <CardProduct
      onClick={onClick}
      className={classNames(className, 'p-4 bg-account bg-primary-100')}
    >
      <CardProduct.HeaderCard>
        <Icon name='Wallet' className='w-14 h-14' />
        <CardProduct.ShowBalance setIsShow={setIsShow} isShow={isShow} />
      </CardProduct.HeaderCard>
      <Box>
        <BitcoinSymbol
          classContainer={classNames({ 'blur-lg': !isShow })}
          textType='font_30_fw_bold_fm_rob'
          classIcon='w-6 h-6'
          text={balance}
        />
        <CardProduct.FooterCard>
          <Text textType='font_16_fw_bold_fm_rob'>
            {t('savings', {
              balance: isShow
                ? textAccount
                : maskReplace({ text: textAccount }),
            })}
          </Text>
          <Text textType='font_16_fw_bold_fm_rob' className='break-all'>
            BANCAMANIA
          </Text>
        </CardProduct.FooterCard>
      </Box>
    </CardProduct>
  )
}
export default CardAccount
