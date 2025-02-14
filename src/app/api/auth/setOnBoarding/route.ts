import type { NextRequest } from 'next/server'
import { globalConfig } from '@/config/globalConfig'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { step } = body

  try {
    const headers = new Headers()

    headers.append(
      'Set-Cookie',
      `onbording-step=${step}; HttpOnly; Secure; Path=/; Max-Age=${
        globalConfig.expireOnBoardingStep
      }; SameSite=Strict`
    )

    return new Response(
      JSON.stringify({ message: 'Step onBoarding establecido', step }),
      { headers, status: 200 }
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 })
  }
}
