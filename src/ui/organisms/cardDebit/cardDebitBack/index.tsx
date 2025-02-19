import CardProduct from '../../cardProduct'
import { CardDebitBackProps, CardDebitProps } from '../types'

const CardDebitBack = ({
  onClick,
  isLoading,
  onClickFlip,
  nextStepComponent,
  cv,
  name,
  validThru,
}: CardDebitBackProps) => {
  return (
    <CardProduct.BackBankingCard
      className='bg-debit'
      isLoading={isLoading}
      onClick={onClick}
      footerRightComponent={<CardProduct.BackFlip onClickFlip={onClickFlip} />}
      nextStepComponent={nextStepComponent}
      cv={cv}
      name={name}
      validThru={validThru}
    />
  )
}

export default CardDebitBack
