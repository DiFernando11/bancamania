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
  return (
    <CardProduct.BankingCard
      className='bg-debit'
      headerBankCard={<CardProduct.HeaderMasterCard />}
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
