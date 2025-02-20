import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { Box } from '@/ui/atoms'
import Content from './content'
import Footer from './footer'
import Header from './header'
import SideBar from './sideBar'

const LayoutAuthentication = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      className={classNames(
        'h-screen grid',
        'grid-rows-[5rem_1fr_3.125rem]',
        'grid-cols-1',
        'sm:grid-rows-[5rem_1fr]',
        'sm:grid-cols-[clamp(9.375rem,25%,18.75rem)_1fr]'
      )}
    >
      <Header />
      <SideBar />
      <Content>{children}</Content>
      <Footer />
    </Box>
  )
}

export default LayoutAuthentication
