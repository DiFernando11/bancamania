import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks/commons'

const SideBar = () => {
  const t = useI18Text('commonAriaLabel')

  return (
    <aside
      aria-label={t('aside')}
      className={classNames(
        'p-4 row-start-2 col-start-1 col-span-1 border hidden',
        'sm:block'
      )}
    >
      <nav>
        <ul>
          <li>
            <a href='#opcion1'>Opción 1</a>
          </li>
          <li>
            <a href='#opcion2'>Opción 2</a>
          </li>
          <li>
            <a href='#opcion3'>Opción 3</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
