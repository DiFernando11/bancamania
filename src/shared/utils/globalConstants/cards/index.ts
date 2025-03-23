import { INTEREST, Mastercard, TypeCardCredit, VisaCard } from '@/shared/types'

export const ICON_CARD_CREDIT = {
  [TypeCardCredit.MASTERCARD]: 'MasterCard',
  [TypeCardCredit.VISA]: 'Visa',
}

export const BG_CARD_MAS_CREDIT = {
  [Mastercard.STANDARD]: 'bg-mas-standar',
  [Mastercard.GOLD]: 'bg-mas-gold',
  [Mastercard.PLATINUM]: 'bg-mas-plat',
  [Mastercard.WORLD]: 'bg-mas-world',
  [Mastercard.WORLD_ELITE]: 'bg-mas-world-elite',
}

export const BG_CARD_VISA_CREDIT = {
  [VisaCard.CLASSIC]: 'bg-visa-clasic',
  [VisaCard.GOLD]: 'bg-visa-gold',
  [VisaCard.PLATINUM]: 'bg-visa-plat',
  [VisaCard.SIGNATURE]: 'bg-visa-signature',
  [VisaCard.INFINITE]: 'bg-visa-infinite',
}

export const BG_CARD_CREDIT = {
  [TypeCardCredit.MASTERCARD]: BG_CARD_MAS_CREDIT,
  [TypeCardCredit.VISA]: BG_CARD_VISA_CREDIT,
}

export const INTEREST_CARD = {
  [TypeCardCredit.MASTERCARD]: INTEREST.MASTERCARD,
  [TypeCardCredit.VISA]: INTEREST.VISA,
}
