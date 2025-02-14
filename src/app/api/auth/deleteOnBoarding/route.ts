export async function DELETE() {
  try {
    const headers = new Headers()
    headers.append(
      'Set-Cookie',
      `onbording-step=; HttpOnly; Secure; Path=/; Max-Age=0`
    )

    return new Response('Cookie eliminada', { headers, status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 })
  }
}
