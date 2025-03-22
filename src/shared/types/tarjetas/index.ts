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

export interface CreateCardCreditResponse {
  receiptID: string
}

export enum TypeCardCredit {
  MASTERCARD = 'mastercard',
  VISA = 'visa',
}

export enum VisaCard {
  CLASSIC = 'Visa Classic',
  GOLD = 'Visa Gold',
  PLATINUM = 'Visa Platinum',
  SIGNATURE = 'Visa Signature',
  INFINITE = 'Visa Infinite',
}

export enum Mastercard {
  STANDARD = 'Mastercard Standard',
  GOLD = 'Mastercard Gold',
  PLATINUM = 'Mastercard Platinum',
  WORLD = 'Mastercard World',
  WORLD_ELITE = 'Mastercard World Elite',
}

export enum VersionMastercard {
  MASTERCARD = 'mastercard',
  VISA = 'visa',
}
export interface CardCredit {
  id: string
  cardNumber: string
  marca: TypeCardCredit
  version: Mastercard | VisaCard
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

export interface GetCardCreditIDResponse {
  id: string
  cardNumber: string
  expirationDate: string
  createdAt: string
  cvv: string
  marca: string
  version: string
  miles: number
  limit: string
  status: string
}

export interface GetCardCreditIDRequest {
  creditID?: string
}

export enum CardStatus {
  ACTIVE = 'active',
  BLOCKED = 'blocked',
}

export interface UpdataStatusCreditRequest {
  id?: string
}
export interface UpgradeCreditRequest {
  id?: string
}

export interface UpgradeCreditResponse {
  limit: number
  nextVersion: string
  receiptID: string
}
