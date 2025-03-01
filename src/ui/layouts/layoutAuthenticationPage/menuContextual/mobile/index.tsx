import React from 'react'
import { useI18Text } from '@/application/hooks'
import { MenuOption } from '@/shared'
import { useBuildActiveOption } from '@/shared/hooks'
import { DropDown, Modal } from '@/ui/molecules'

const MobileMenuContextual = ({ options }: { options: MenuOption[] }) => {
  const { menu } = useBuildActiveOption({ options })
  const t = useI18Text()

  return (
    <Modal position='bottom' minHeight={'auto'}>
      <Modal.Header className='flex items-center justify-between'>
        <Modal.Title title={t('options')} />
        <Modal.Cerrar />
      </Modal.Header>
      <DropDown items={menu} component={DropDown.Menu} />
    </Modal>
  )
}

export default MobileMenuContextual
