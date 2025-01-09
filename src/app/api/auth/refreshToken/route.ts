import type { NextRequest } from 'next/server'
import { globalConfig } from '@/config/globalConfig'

export async function PUT(request: NextRequest) {
  const body = await request.json()
  const { token } = body

  try {
    const headers = new Headers()

    headers.append(
      'Set-Cookie',
      `token-session-id=${token}; HttpOnly; Secure; Path=/; Max-Age=${
        globalConfig.expireInRefreshToken
      }; SameSite=Strict`
    )

    return new Response(
      JSON.stringify({ message: 'Token de acceso se ha actualizado', token }),
      { headers, status: 200 }
    )
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 })
  }
}
