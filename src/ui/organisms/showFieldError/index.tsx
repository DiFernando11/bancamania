import React from 'react'
import { ErrorField } from '@/shared'
import { Text } from '@/ui/atoms'

const ShowFieldError = ({ errors }: { errors: ErrorField[] }) => {
  return (
    <ul className='space-y-2 mt-2'>
      {errors.map((err, i) => (
        <li key={i}>
          <Text>Field: {err.field}</Text>
          <ul className='ml-4 list-disc text-sm'>
            {err.errors.map((msg: string, j: number) => (
              <li key={j}>{msg}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default ShowFieldError
