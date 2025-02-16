import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { useLogoutRedirect } from '@/application/useCases'
import { useChangeLang, useMenuBuild, useModal } from '@/shared/hooks'
import { Box } from '@/ui/atoms'
import { ChangeLangComponent } from '@/ui/organisms'
import DropDown from '../../dropDown'
import Modal from '../modal'

const ModalMenuBottom = () => {
  const t = useI18Text()
  const route = useRouter()
  const { handleChangeLanguage, isLoading } = useChangeLang()
  const { handleActionService } = useLogoutRedirect()

  const { closeModal } = useModal()
  const handleClick = (path: string) => {
    route.push(path)
    closeModal()
  }
  const { menu } = useMenuBuild({ handleClick })

  const additionalOptions = [
    {
      isLoading,
      label: <ChangeLangComponent />,
      onClick: () => {
        closeModal()
        handleChangeLanguage()
      },
    },
    {
      label: (
        <DropDown.Content
          text={t('logout')}
          nameIcon='Logout'
          iconClassName='w-10 h-10'
        />
      ),
      onClick: () => {
        closeModal()
        handleActionService({})
      },
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
        <Modal.Title title={t('titleMenu')} />
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
