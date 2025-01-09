import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { ENV } from '@/config/envConfig'

const handler = NextAuth({
  callbacks: {
    async jwt({ token, user, trigger, session, account }) {
      if (user) {
        token.phone = user.phone
        token.email = user.email
        token.firstName = user.firstName
        token.lastName = user.lastName
        token.image = user.image
      }
      if (trigger === 'update' && session?.user) {
        token.firstName = session.user.firstName
        token.lastName = session.user.lastName
        token.image = session.user.image
        token.phone = session.user.phone
        token.isVerifyPhone = session.user.isVerifyPhone
      }
      if (account) {
        token.idToken = account.id_token
      }

      return token
    },
    async session({ session, token }) {
      try {
        if (session.user) {
          session.user.idToken = token.idToken
          session.user.firstName = token.firstName
          session.user.lastName = token.lastName
          session.user.id = token.id
          session.user.image = token.image
          session.user.phone = token.phone
        }

        return session
      } catch (error) {
        console.error('Error en la session del callBack:', error)
      }

      return session
    },
  },
  jwt: {
    maxAge: 0,
  },
  providers: [
    GoogleProvider({
      clientId: ENV.AUTH_GOOGLE_ID,
      clientSecret: ENV.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const { phone, email, lastName, firstName, image } = credentials || {}

        return { email, firstName, image, lastName, phone }
      },
      credentials: {
        email: { label: 'Email', type: 'text' },
        firstName: { label: 'First Name', type: 'text' },
        image: { label: 'Image', type: 'text' },
        lastName: { label: 'Last Name', type: 'text' },
        phone: { label: 'Phone', type: 'text' },
      },
      name: 'Custom Phone Login',
    }),
  ],
  secret: ENV.SECRET_KEY_JWT,
  session: {
    strategy: 'jwt',
  },
})

export { handler as GET, handler as POST }
