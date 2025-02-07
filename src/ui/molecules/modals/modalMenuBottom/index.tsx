import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useMenuBuild, useModal } from '@/shared/hooks'
import { Box, Icon } from '@/ui/atoms'
import DropDown from '../../dropDown'
import Modal from '../modal'

const ModalMenuBottom = () => {
  const route = useRouter()
  const { closeModal } = useModal()
  const handleClick = (path: string) => {
    route.push(path)
    closeModal()
  }
  const { menu } = useMenuBuild({ handleClick })

  const additionalOptions = [
    {
      label: <DropDown.Content text='Cerrar Session' />,
    },
    {
      label: (
        <DropDown.Content text='Ultima conexion' className='cursor-default' />
      ),
    },
  ]

  return (
    <Modal
      position='bottom'
      height={'auto'}
      minHeight={'0px'}
      maxHeight={'calc(100vh - 80px)'}
    >
      <Modal.Header className='flex justify-between w-full items-center'>
        <Modal.Title title='Que quieres hacer ?' />
        <Modal.Cerrar />
      </Modal.Header>
      <Box
        className={classNames('overflow-auto')}
        style={{
          scrollbarWidth: 'none',
        }}
      >
        <DropDown
          component={DropDown.Menu}
          items={[...menu, ...additionalOptions]}
        />
      </Box>
    </Modal>
  )
}

export default ModalMenuBottom
