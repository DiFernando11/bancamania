import classNames from 'classnames'
import React from 'react'
import { useForwardCode } from '@/shared/hooks'
import { HasValidCode, HasValidCodeType } from '@/shared/types'
import { ForwarTimeCode } from '@/shared/utils/globalConstants'
import { Counter } from '@/ui/atoms'

const ForwardCode = ({
  handleAction,
  type,
  restHasValidCode,
}: {
  handleAction: (onSuccess: () => void) => void
  type: HasValidCodeType
  restHasValidCode: Partial<HasValidCode>
}) => {
  const { handleEndTime, disabled, onSuccess, timerRef, isStartCount } =
    useForwardCode({ restHasValidCode, type })

  const handleForwardCode = () => {
    handleAction(onSuccess)
  }

  return (
    <>
      {isStartCount && (
        <>
          <Counter
            direction='backward'
            targetTime={0}
            ref={timerRef}
            start={ForwarTimeCode}
            onReachTime={handleEndTime}
          />
          <button
            disabled={!disabled}
            className={classNames(
              'border border-gray-300 rounded-lg shadow-sm py-2 px-5',
              {
                'bg-orange-200': disabled,
                'bg-gray-700 text-white': !disabled,
              }
            )}
            onClick={handleForwardCode}
          >
            Reenviar codigo
          </button>
        </>
      )}
    </>
  )
}

export default ForwardCode
