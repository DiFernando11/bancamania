import { useI18Text } from '@/application/hooks'
import CardProduct from '../cardProduct'
import CardDebitBack from './cardDebitBack'
import { CardDebitProps } from './types'

const CardDebit = ({
  onClick,
  isLoading,
  onClickFlip,
  nextStepComponent,
  textAccount,
}: CardDebitProps) => {
  const t = useI18Text('tarjetas')

  return (
    <CardProduct.BankingCard
      className='bg-debit'
      headerBankCard={<CardProduct.HeaderCard text={t('debit')} />}
      isLoading={isLoading}
      onClick={onClick}
      footerRightComponent={<CardProduct.BackFlip onClickFlip={onClickFlip} />}
      nextStepComponent={nextStepComponent}
      textAccount={textAccount}
    />
  )
}
CardDebit.Back = CardDebitBack
export default CardDebit
