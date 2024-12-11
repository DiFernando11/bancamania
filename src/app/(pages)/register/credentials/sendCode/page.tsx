"use client";
import React from "react";
import { useSendCodeCredentialsSaveMail } from "@/application/useCases";
function SendCodeRegisterPage() {
  const { handleActionService } = useSendCodeCredentialsSaveMail();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formDataObject = Object.fromEntries(formData) as {
      [key: string]: string;
    };
    const { email } = formDataObject;
    handleActionService({
      email,
    });
  };
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center text-3xl">Pagina de Registro Validar email</h1>
      <form
        className="flex flex-col justify-center items-center gap-5"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200 placeholder-gray-400"
            type="text"
            id="email"
            name="email"
            required
          />
        </div>
        <button
          className="border border-gray-300 rounded-lg shadow-sm py-2 px-5"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default SendCodeRegisterPage;
