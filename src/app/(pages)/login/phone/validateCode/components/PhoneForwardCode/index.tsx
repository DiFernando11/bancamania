import { useSendCodePhone } from "@/application/hooks";
import { useAuthStoreLs } from "@/application/zustand/stores";
import ForwardCode from "@/shared/components/ForwardCode";
import { Box } from "@/ui/atoms";

import React from "react";

const PhoneForwardCode = () => {
  const { hasValidCode } = useAuthStoreLs();
  console.log({ hasValidCode });
  const { handleActionService } = useSendCodePhone();
  const phone = hasValidCode?.phone ?? "";

  const handleAction = (onSuccess: () => void) => {
    handleActionService({ phone }, { onSuccess });
  };

  return (
    <Box>
      <ForwardCode
        handleAction={handleAction}
        type="registerPhone"
        restHasValidCode={{
          phone,
        }}
      />
    </Box>
  );
};

export default PhoneForwardCode;
