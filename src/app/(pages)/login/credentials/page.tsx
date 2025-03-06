'use client'
import Link from 'next/link'
import React from 'react'
import { z } from 'zod'
import { useLoginCredentialsCase } from '@/application/useCases'
import { clientRoutes } from '@/routes/clientRoutes'
import FormState from '@/ui/atoms/formState'
import { FormField } from '@/ui/molecules'
import { CredentialsForm } from './types'

const schema: z.ZodSchema<CredentialsForm> = z.object({
  email: z.string().email('Correo inválido').min(1, 'Requerido'),
  password: z
    .string()
    .min(6, 'Debe tener al menos 6 caracteres')
    .min(1, 'Requerido'),
})

const CredentialsPage = () => {
  const CustomInput = ({
    value,
    onChange,
    onBlur,
    placeholder,
  }: {
    value: string
    onChange: (val: string) => void
    onBlur: () => void
    placeholder?: string
  }) => {
    return (
      <input
        className='border border-gray-300 px-3 py-2 text-black
        rounded focus:ring-2 focus:ring-blue-500 focus:outline-none'
        value={value}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    )
  }
  const { handleActionService } = useLoginCredentialsCase()

  const onSubmit = (data: CredentialsForm) => {
    handleActionService(data)
  }

  return (
    <div className='flex flex-col gap-10 my-5'>
      <h1 className='text-center text-3xl'>Pagina de Login con credenciales</h1>
      <FormState
        defaultValues={{ email: '', password: '' }}
        schema={schema}
        onSubmit={onSubmit}
      >
        <div className='flex flex-col'>
          <FormField<CredentialsForm>
            name='email'
            component={CustomInput}
            placeholder='Ingrese su email'
            label='Email'
          />
        </div>
        <div className='flex flex-col'>
          <FormField<CredentialsForm>
            label='Contraseña'
            name='password'
            component={CustomInput}
            placeholder='Ingrese su contraseña'
          />
        </div>
        <button
          className='border border-gray-300 rounded-lg shadow-sm py-2 px-5'
          type='submit'
        >
          Enviar
        </button>
      </FormState>
      <Link
        className='text-center'
        href={clientRoutes.registerCredentialsSendCode.path}
      >
        Ya tienes una cuenta creada? Haz click aqui
      </Link>
    </div>
  )
}

export default CredentialsPage
