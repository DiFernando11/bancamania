export interface GetCardResponse {
  id: string
  cardNumber: string
  expirationDate: string
  cvv: string
  status: string
  owner: string
}

export interface CreateCardCreditRequest {
  marca: string
}

export enum TypeCardCredit {
  MASTERCARD = 'mastercard',
  VISA = 'visa',
}

export interface CardCredit {
  id: string
  cardNumber: string
  marca: TypeCardCredit
  version: string
}

export type GetCardCreditResponse = CardCredit[]

export interface IcreaseVersion {
  currentLimit: string
  id: string
  marca: TypeCardCredit
  newLimit: string | number
  version: string
}
export interface NewCards {
  id: string
  limit: string
  marca: TypeCardCredit
  version: string
  textOffert: string
}

export interface GetOffertsResponse {
  increaseVersion: IcreaseVersion[]
  newCards: NewCards[]
}
