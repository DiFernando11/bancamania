export type TypeVerification = 'google' | 'phone' | 'credentials'

export interface User {
  email: string
  phone: string | null
  firstName: string
  lastName: string
}

export type Email = Pick<User, 'email'>

export interface AuthenticationResponse {
  message: string
  token: string
  refreshToken: string
  user: User
}

export interface LoginType {
  token: string
  refreshToken: string
}

export interface RegisterType {
  typeVerification: TypeVerification
  idToken?: string
  phone?: string
  email?: string
  password?: string
  firstName?: string
  lastName?: string
  code?: string
}
