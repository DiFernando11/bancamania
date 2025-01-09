'use client'
import React from 'react'
import { useSendCodeSavePhone } from '@/application/useCases'

const PhonePage = () => {
  const { handleActionService } = useSendCodeSavePhone()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const formDataObject = Object.fromEntries(formData) as {
      [key: string]: string
    }
    const { phone } = formDataObject
    handleActionService({ phone })
  }

  return (
    <main className='h-full gap-10 my-8 flex flex-col justify-center items-center '>
      <h1 className='text-center text-3xl'>Ingresa tu numero de celular</h1>
      <form
        className='flex justify-center items-center gap-5'
        method='POST'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col'>
            <label htmlFor='phone'>Phone:</label>
            <input
              className='w-full px-4 py-2 border border-gray-300 rounded-lg 
              shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 
              focus:border-red-500 transition duration-200 placeholder-gray-400'
              type='text'
              id='phone'
              name='phone'
              required
            />
          </div>
          <button
            type='submit'
            className='border border-gray-300 rounded-lg shadow-sm py-2 px-5'
          >
            Enviar
          </button>
        </div>
      </form>
    </main>
  )
}

export default PhonePage
