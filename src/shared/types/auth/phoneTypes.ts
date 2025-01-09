import { User } from './user'

export interface PhoneType {
  phone: string
}

export interface SendCodeCredentialsResponse {
  message: string
  lastName?: string
  firstName?: string
}

export interface SendCodePhoneResponse {
  message: string
}

export interface ValidateCodePhoneType {
  phone: string
  code: string
}

export interface RegisterPhone {
  phone: string
  idToken: string
}

export interface RegisterOrLoginGoogle {
  idToken: string
}

export interface ValidateCodePhoneResponse {
  message: string
  isUserRegistered: boolean
  refreshToken: string
  token: string
  user: User
}
