import React from 'react'
import { Box } from '@/ui/atoms'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import Welcome from './components/welcome'

const PerfilPage = () => {
  return (
    <LayoutAuthenticationPage
      i18nTitle='perfil'
      // contextualMenu={[]}
      footerBox={<Box>Hola</Box>}
    >
      <Welcome />
    </LayoutAuthenticationPage>
  )
}

export default PerfilPage
