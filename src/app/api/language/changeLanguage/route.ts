import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { lang } = await request.json()

  const response = NextResponse.json({
    locale: lang,
    message: 'Language updated',
  })
  response.cookies.set('NEXT_LOCALE', lang, { path: '/' })

  return response
}
