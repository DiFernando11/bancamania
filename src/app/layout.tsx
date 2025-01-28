/* eslint-disable react/function-component-definition */
import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { ReactPortal } from '@/ui/atoms'
import { DefineLayoutType } from '@/ui/layouts'
import { ReactQueryProvider, SessionAuthProvider } from './providers'

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <Script src='/theme/themeInit.js' strategy='beforeInteractive' />
      </head>
      <body>
        <ReactQueryProvider>
          <SessionAuthProvider>
            <NextIntlClientProvider messages={messages}>
              <ReactPortal />
              <DefineLayoutType>{children}</DefineLayoutType>
            </NextIntlClientProvider>
          </SessionAuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
