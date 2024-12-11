"use client";
import React from "react";
import Link from "next/link";
import { clientRoutes } from "@/routes/clientRoutes";

export const LoginWithCreedentials = () => {
  return (
    <Link
      className="border text-center p-3"
      href={clientRoutes.loginCredentials}
    >
      Inicia con credenciales
    </Link>
  );
};
