import classNames from 'classnames'
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
  className,
}: CardDebitProps) => {
  const t = useI18Text('tarjetas')

  return (
    <CardProduct.BankingCard
      className={classNames('bg-debit', className)}
      headerBankCard={<CardProduct.HeaderCard text={t('debit')} />}
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
CardDebit.Back = CardDebitBack
export default CardDebit
