/* eslint-disable unicorn/filename-case */
import { DefaultSession } from 'next-auth'
import { JWT as DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface User {
    idToken?: string
    id?: string
    phone?: string
    email?: string
    lastName?: string
    firstName?: string
    image?: string
  }

  interface Session {
    user: {
      idToken?: string
      id?: string
      firstName?: string
      lastName?: string
      phone?: string
      image?: string
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id?: string
    idToken?: string
    phone?: string
    email?: string
    lastName?: string
    firstName?: string
    image?: string
  }
}
