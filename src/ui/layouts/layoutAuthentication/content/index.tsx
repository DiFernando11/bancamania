import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { Box } from '@/ui/atoms'

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      className={classNames(
        'row-start-2 row-end-3 col-span-1',
        'sm:px-6 sm:pt-6'
      )}
    >
      {children}
    </Box>
  )
}

export default Content
