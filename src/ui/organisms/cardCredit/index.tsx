import classNames from 'classnames'
import { useI18Text } from '@/application/hooks'
import { BG_CARD_CREDIT, ICON_CARD_CREDIT } from '@/shared/utils'
import { Text } from '@/ui/atoms'
import { IconNames } from '@/ui/atoms/icons/icon/types'
import CardProduct from '../cardProduct'
import CardCreditBack from './cardCreditBack'
import { CardCreditProps } from './types'

const CardCredit = ({
  onClick,
  isLoading,
  onClickFlip,
  nextStepComponent,
  textAccount,
  brand,
  version,
  className,
}: CardCreditProps) => {
  const t = useI18Text('tarjetas')

  return (
    <CardProduct.BankingCard
      // @ts-expect-error: El tipo de 'version' no es inferido correctamente según el brand
      className={classNames(`${BG_CARD_CREDIT[brand][version]}`, className)}
      titleComponent={
        <Text textType='font_18_fw_bold_fm_rob'>{version?.toUpperCase()}</Text>
      }
      headerBankCard={
        <CardProduct.HeaderCard
          iconName={ICON_CARD_CREDIT?.[brand] as IconNames}
          text={t('credit')}
        />
      }
      isLoading={isLoading}
      onClick={onClick}
      footerRightComponent={
        onClickFlip && <CardProduct.BackFlip onClickFlip={onClickFlip} />
      }
      nextStepComponent={nextStepComponent}
      textAccount={textAccount}
    />
  )
}

CardCredit.Back = CardCreditBack
export default CardCredit
