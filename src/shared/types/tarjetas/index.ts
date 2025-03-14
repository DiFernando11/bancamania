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
