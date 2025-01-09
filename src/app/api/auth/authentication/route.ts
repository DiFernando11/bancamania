import type { NextRequest } from 'next/server'
import { globalConfig } from '@/config/globalConfig'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { token, refreshToken } = body

  try {
    const headers = new Headers()

    headers.append(
      'Set-Cookie',
      `token-session-id=${token}; HttpOnly; Secure; Path=/; Max-Age=${
        globalConfig.expireInRefreshToken
      }; SameSite=Strict`
    )

    headers.append(
      'Set-Cookie',
      `refresh-token-session-id=${refreshToken}; HttpOnly; Secure; Path=/; Max-Age=${
        globalConfig.expireInRefreshToken
      }; SameSite=Strict`
    )

    return new Response(
      JSON.stringify({ message: 'Cookies establecidas', token }),
      { headers, status: 200 }
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 })
  }
}
