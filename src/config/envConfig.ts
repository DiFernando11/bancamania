type EnvConfig = {
  API_URL: string
  CLIENT_URL: string
  AUTH_GOOGLE_ID: string
  AUTH_GOOGLE_SECRET: string
  SECRET_KEY_JWT: string
}

export const ENV: EnvConfig = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || '',
  CLIENT_URL: process.env.NEXTAUTH_URL || '',
  AUTH_GOOGLE_ID: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID || '',
  AUTH_GOOGLE_SECRET: process.env.NEXT_PUBLIC_AUTH_GOOGLE_SECRET || '',
  SECRET_KEY_JWT: process.env.NEXT_PUBLIC_SECRET_KEY_JWT || '',
}
