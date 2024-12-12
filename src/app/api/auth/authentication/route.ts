import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { token } = body

  try {
    const headers = new Headers()
    headers.append(
      'Set-Cookie',
      `token-session-id=${token}; HttpOnly; Secure; Path=/; Max-Age=${
        60 * 60 * 24
      }`
    )

    return new Response(
      JSON.stringify({ message: 'Cookie establecida', token }),
      { status: 200, headers }
    )
  } catch (error) {
    console.error('Error al hacer login:', error)

    return new Response(JSON.stringify({ error: error }), { status: 500 })
  }
}
