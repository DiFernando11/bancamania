import React, { ReactNode } from 'react'
import { Box } from '@/ui/atoms'
import Header from './header'
import Main from './main'
import SideBar from './sideBar'

const LayoutAuthentication = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      className='h-screen grid gap-2'
      style={{
        gridTemplateColumns: 'clamp(200px, 25%, 300px) 1fr 1fr 1fr',
        gridTemplateRows: '80px 1fr',
      }}
    >
      <Header />
      <SideBar />
      <Main>{children}</Main>
    </Box>
  )
}

export default LayoutAuthentication
