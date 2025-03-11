'use client'
import React, { forwardRef, useState } from 'react'
import { debounce } from '@/shared/utils'
import { Box, Icon } from '@/ui/atoms'
import { AnimationVisible, InputText } from '@/ui/molecules'
import { InputSearchProps } from './types'

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ debounceDelay = 800, onSearch, value = '', ...props }, ref) => {
    const [query, setQuery] = useState(value)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = e.target.value
      setQuery(newQuery)
      debounce(newQuery, debounceDelay, onSearch)
    }

    const handleClear = () => {
      setQuery('')
      onSearch('')
    }

    return (
      <div className='relative flex items-center w-full'>
        <Icon name='Search' className='w-7 h-7 absolute left-4' />
        <InputText
          {...props}
          ref={ref}
          value={query}
          onChange={handleChange}
          className='pl-14 pr-12 w-full'
        />
        <AnimationVisible
          isVisible={Boolean(query)}
          className='absolute right-4 cursor-pointer'
        >
          <Box onClick={handleClear}>
            <Icon
              name='Close'
              className='w-4 h-4 text-icon-default'
              onClick={handleClear}
            />
          </Box>
        </AnimationVisible>
      </div>
    )
  }
)

InputSearch.displayName = 'InputSearch'

export default InputSearch
