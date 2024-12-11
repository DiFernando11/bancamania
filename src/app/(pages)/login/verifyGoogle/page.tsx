"use client";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  useLoginOrRegisterGoogleCase,
  useRegisterPhoneCase,
} from "@/application/useCases";
import { useAuthStoreLs } from "@/application/zustand/stores";

function VerifyGooglePage() {
  const [isVerify, setIsVerify] = useState(false);
  const { handleActionService: registerOrLoginGoogle } =
    useLoginOrRegisterGoogleCase();
  const { handleActionService: registerPhone } = useRegisterPhoneCase();
  const { hasValidCode } = useAuthStoreLs();
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const flow = searchParams.get("flow");

  useEffect(() => {
    if (
      session?.user?.idToken &&
      flow &&
      !isVerify &&
      status === "authenticated"
    ) {
      if (flow === "google") {
        registerOrLoginGoogle({
          idToken: session?.user?.idToken,
        });
        return;
      }
      if (flow === "phone") {
        registerPhone({
          idToken: session?.user?.idToken,
          phone: hasValidCode?.phone as string,
        });
        return;
      }

      setIsVerify(true);
    }
  }, [session]);

  return <div>VerifyGooglePage</div>;
}

export default VerifyGooglePage;
