import React from 'react'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import Welcome from './components/welcome'

const PerfilPage = () => {
  return (
    <LayoutAuthenticationPage i18nTitle='perfil'>
      <Welcome />
    </LayoutAuthenticationPage>
  )
}

export default PerfilPage
