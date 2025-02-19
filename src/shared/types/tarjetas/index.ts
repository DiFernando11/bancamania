export interface CardResponse {
  id: string
  cardNumber: string
  expirationDate: string
  cvv: string
  status: string
}

export interface GetCardResponse {
  firstName: string
  lastName: string
  debitCard: CardResponse
}
