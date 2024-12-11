"use client";
import { useAuthStoreLs } from "@/application/zustand/stores";
import React, { useEffect, useState } from "react";
import FormRegisterCredentials from "./components/formRegisterCredentials";

function ConfirmCodeRegisterPage() {
  const { hasValidCode } = useAuthStoreLs();
  const [isValidCode, setIsValidCode] = useState<boolean>(false);

  useEffect(() => {
    setIsValidCode(Boolean(hasValidCode));
  }, []);

  return (
    <div className="flex flex-col gap-10 my-5">
      <h1 className="text-center text-3xl">
        Pagina de Registro Confirmar codigo
      </h1>
      {isValidCode && <FormRegisterCredentials />}
    </div>
  );
}

export default ConfirmCodeRegisterPage;
