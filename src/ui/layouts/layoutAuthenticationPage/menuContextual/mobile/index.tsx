import React from 'react'
import { MenuOption } from '@/shared'
import { useBuildActiveOption } from '@/shared/hooks'
import { DropDown, Modal } from '@/ui/molecules'

const MobileMenuContextual = ({ options }: { options: MenuOption[] }) => {
  const { menu } = useBuildActiveOption({ options })

  return (
    <Modal position='bottom' minHeight={'auto'}>
      <Modal.Header className='flex items-center justify-between'>
        <Modal.Title title={'Opciones'} />
        <Modal.Cerrar />
      </Modal.Header>
      <DropDown items={menu} component={DropDown.Menu} />
    </Modal>
  )
}

export default MobileMenuContextual
