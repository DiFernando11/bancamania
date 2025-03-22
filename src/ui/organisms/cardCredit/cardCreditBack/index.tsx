import { BG_CARD_CREDIT } from '@/shared/utils'
import CardProduct from '../../cardProduct'
import { CardCreditBackProps } from '../types'

const CardCreditBack = ({
  onClick,
  isLoading,
  onClickFlip,
  nextStepComponent,
  cv,
  name,
  validThru,
  brand,
  version,
}: CardCreditBackProps) => {
  return (
    <CardProduct.BackBankingCard
      // @ts-expect-error: El tipo de 'version' no es inferido correctamente según el brand
      className={`${BG_CARD_CREDIT?.[brand]?.[version]}`}
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

export default CardCreditBack
