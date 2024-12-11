import { useAuthStoreLs } from "@/application/zustand/stores";
import { clientRoutes } from "@/routes/clientRoutes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCounter } from "../useCounter";
import { addMinutesToDate } from "@/shared/utils";
import {
  ExpiredTimeCodePhone,
  ForwarTimeCode,
} from "@/shared/utils/globalConstants";
import { HasValidCode, HasValidCodeType } from "@/shared/types";

export const useForwardCode = ({
  restHasValidCode,
  type,
}: {
  restHasValidCode: Partial<HasValidCode>;
  type: HasValidCodeType;
}) => {
  const router = useRouter();
  const { handleGetCurrentTime, handleSetTime, handleReset, timerRef } =
    useCounter();
  const { flushHasValidCode, hasValidCode, setHasValidCode } = useAuthStoreLs();
  const [isStartCount, setIsStartCount] = useState<boolean>(false);

  const isSuccessForward = hasValidCode?.isSuccessForward ?? false;
  const expireAt = hasValidCode?.expireAt as Date;

  const [disabled, setDisabled] = useState<boolean>(isSuccessForward);

  const handleEndTime = () => {
    setDisabled(true);
    setHasValidCode({
      ...restHasValidCode,
      expireAt,
      lasTimeForwardCode: 0,
      isSuccessForward: true,
      type,
    });
  };

  const onSuccess = () => {
    handleReset();
    setDisabled(false);
    setHasValidCode({
      ...restHasValidCode,
      expireAt: addMinutesToDate({ minutes: ExpiredTimeCodePhone }),
      lasTimeForwardCode: ForwarTimeCode,
      isSuccessForward: false,
      type,
    });
  };

  const handleSaveCurrentTime = () => {
    if (type === hasValidCode?.type) {
      const timeCurrent = handleGetCurrentTime();
      setHasValidCode({
        ...restHasValidCode,
        expireAt,
        lasTimeForwardCode: timeCurrent,
        isSuccessForward: timeCurrent === 0,
        type,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleSaveCurrentTime);
    if (!hasValidCode?.expireAt || hasValidCode?.type !== type) {
      return router.push(clientRoutes.login);
    }
    const isExpired = new Date() > hasValidCode.expireAt;
    if (isExpired && hasValidCode?.type === type) {
      flushHasValidCode();
      return router.push(clientRoutes.login);
    } else {
      setIsStartCount(true);
    }
    return () => {
      window.removeEventListener("beforeunload", handleSaveCurrentTime);
    };
  }, []);

  useEffect(() => {
    if (isStartCount) {
      handleSetTime(hasValidCode?.lasTimeForwardCode ?? 60);
    }
  }, [isStartCount]);

  return { isStartCount, handleEndTime, disabled, onSuccess, timerRef };
};
