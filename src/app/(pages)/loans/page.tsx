import React from 'react'
import { Box } from '@/ui/atoms'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import Fake from './fake'

const LoansPage = () => {
  return (
    <LayoutAuthenticationPage>
      <Fake />
      <Box>Loans</Box>
    </LayoutAuthenticationPage>
  )
}

export default LoansPage
