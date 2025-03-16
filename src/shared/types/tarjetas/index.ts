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
}

export type GetCardCreditResponse = CardCredit[]
