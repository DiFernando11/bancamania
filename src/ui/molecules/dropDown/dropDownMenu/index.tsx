import classNames from 'classnames'
import { Box, Icon } from '@/ui/atoms'
import { IconArrown } from '../constants'
import { DropDownMenuProps } from '../types'

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
  item,
  setIsOpen,
  isOpen,
  isRoot,
}) => {
  return (
    <button
      onClick={() => {
        if (item.children && !item?.isChildrenActive) {
          setIsOpen(!isOpen)
        }
        if (item.onClick) {
          item.onClick()
        }
      }}
      className={classNames('flex items-center w-full p-4 border-b', {
        'bg-accent-230': item?.isActive,
        'border-accent-200 rounded-b-lg': !isRoot,
        'cursor-default': item?.isChildrenActive || item?.isActive,
        'shadow-bottom-accent rounded-lg ': isRoot,
      })}
    >
      <Box className='flex-1 overflow-hidden'>{item.label}</Box>
      {item.children && (
        <Box
          className={classNames('ml-2 transition-all duration-300 transform', {
            'cursor-not-allowed': item?.isChildrenActive,
            'rotate-0': !isOpen,
            'rotate-180': isOpen,
          })}
        >
          <Icon
            name={IconArrown.name}
            width={IconArrown.size}
            height={IconArrown.size}
          />
        </Box>
      )}
    </button>
  )
}
