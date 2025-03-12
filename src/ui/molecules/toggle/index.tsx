import classNames from 'classnames'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { remToPx } from '@/shared/utils'
import InputBase from '@/ui/atoms/inputBase'
import { ToggleProps } from './types'

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      className,
      value,
      onChange,
      width = '4rem',
      height = '2rem',
      id,
      ...props
    },
    ref
  ) => {
    const pWidth = remToPx({ baseFontSize: 16, value: width }) as number
    const pHeight = remToPx({ baseFontSize: 16, value: height }) as number

    return (
      <label htmlFor={id} className='relative flex cursor-pointer items-center'>
        <InputBase
          checked={value}
          value={value ? 'true' : 'false'}
          type='checkbox'
          ref={ref}
          className='sr-only peer'
          onChange={e => onChange(e.target.checked)}
          id={id}
          {...props}
        />
        <motion.div
          className={classNames(
            className,
            'border border-primary-100 min-w-16 min-h-5 rounded-full dark:bg-transparent',
            'peer-checked:bg-green-500 peer-checked:border-white relative transition-colors'
          )}
          style={{ height, width }}
        >
          <motion.div
            className={classNames(
              'aspect-ratio h-full border border-primary-100 bg-white',
              'rounded-full shadow-md absolute top-0 left-0'
            )}
            layout
            transition={{ damping: 20, stiffness: 300, type: 'spring' }}
            animate={{ x: value ? pWidth - pHeight : 0 }}
          />
        </motion.div>
      </label>
    )
  }
)

Toggle.displayName = 'Toggle'

export default Toggle
