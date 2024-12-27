import fs from 'fs'
import path from 'path'
import { cookies, headers } from 'next/headers'
import { getRequestConfig } from 'next-intl/server'

async function loadMessagesForLocale(locale: string) {
  const messagesDir = path.join(process.cwd(), 'messages', locale)

  const messages: Record<string, string> = {}
  try {
    const files = fs.readdirSync(messagesDir)

    for (const file of files) {
      if (file.endsWith('.json')) {
        const namespace = file.replace('.json', '')
        const filePath = path.join(messagesDir, file)

        const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        messages[namespace] = content
      }
    }
  } catch (error) {
    console.warn(`Error loading messages for locale "${locale}":`, error)
    throw error
  }

  return messages
}

export default getRequestConfig(async () => {
  const acceptLanguage = headers().get('accept-language')
  const cookieLocale = cookies().get('NEXT_LOCALE')?.value
  const browserLocale = acceptLanguage?.split(',')[0].split('-')[0] || 'en'
  const userLocale = cookieLocale || browserLocale || 'en'

  const messages = await loadMessagesForLocale(userLocale).catch(() =>
    loadMessagesForLocale('en')
  )

  return {
    locale: userLocale,
    messages,
  }
})
