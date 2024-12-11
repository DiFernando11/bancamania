import { useSendCodeCredentialsSaveMail } from "@/application/useCases";
import { useAuthStoreLs } from "@/application/zustand/stores";
import ForwardCode from "@/shared/components/ForwardCode";
import { Box } from "@/ui/atoms";
import React from "react";

const ForwardCodeCredentials = () => {
  const { hasValidCode } = useAuthStoreLs();
  console.log({ hasValidCode });
  const { handleActionService } = useSendCodeCredentialsSaveMail();
  const email = hasValidCode?.mail ?? "";

  const handleAction = (onSuccess: () => void) => {
    console.log(email, "DESDE EL COMPONENTE");
    handleActionService({ email }, { onSuccess });
  };

  return (
    <Box>
      <ForwardCode
        handleAction={handleAction}
        type="registerCredentials"
        restHasValidCode={{
          firstName: hasValidCode?.firstName,
          lastName: hasValidCode?.lastName,
          mail: hasValidCode?.mail,
        }}
      />
    </Box>
  );
};

export default ForwardCodeCredentials;
