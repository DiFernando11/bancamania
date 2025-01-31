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
        'grid-rows-[80px_1fr_50px]',
        'grid-cols-1',
        'sm:grid-rows-[80px_1fr]',
        'sm:grid-cols-[clamp(150px,25%,300px)_1fr]'
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
