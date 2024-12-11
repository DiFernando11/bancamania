export async function DELETE() {
  try {
    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      `token-session-id=; HttpOnly; Secure; Path=/; Max-Age=0`
    );

    return new Response("Cookie eliminada", { status: 200, headers });
  } catch (error) {
    console.error("Error al eliminar la cookie:", error);
    return new Response("Error al eliminar la cookie", { status: 500 });
  }
}
