import classNames from 'classnames'
import React from 'react'
import { useChangeLang, useGlobalLoading } from '@/shared/hooks'
import { Box } from '@/ui/atoms'
import { ChangeLangComponent } from '@/ui/organisms'

const BottomSideBar = () => {
  const { handleChangeLanguage, isLoading } = useChangeLang()
  useGlobalLoading([isLoading])

  return (
    <Box className='flex flex-col border-t-2 border-accent-200 w-full truncate'>
      <button
        disabled={isLoading}
        aria-disabled={isLoading}
        className={classNames('text-left p-4  rounded-br-3xl', {
          'bg-loading-100 cursor-wait': isLoading,
        })}
        onClick={handleChangeLanguage}
      >
        <ChangeLangComponent />
      </button>
    </Box>
  )
}

export default BottomSideBar
