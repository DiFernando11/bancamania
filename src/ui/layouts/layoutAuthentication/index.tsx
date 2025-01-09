import React, { ReactNode } from 'react'
import Header from './header'
import Main from './main'
import SideBar from './sideBar'

const LayoutAuthentication = ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <SideBar />
      <Main>{children}</Main>
    </React.Fragment>
  )
}

export default LayoutAuthentication
