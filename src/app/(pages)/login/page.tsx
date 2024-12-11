import Box from "@/ui/atoms/Box";
import React from "react";
import { LoginGoogle, LoginPhone, LoginWithCreedentials } from "./components";

export default async function LoginPage() {
  return (
    <Box className="w-full h-screen my-5 flex flex-col gap-10">
      <h1 className="text-center text-3xl">Ingresa con tu opcion preferida</h1>
      <LoginGoogle />
      <LoginPhone />
      <LoginWithCreedentials />
    </Box>
  );
}
