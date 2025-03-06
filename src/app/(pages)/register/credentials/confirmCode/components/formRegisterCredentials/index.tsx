'use client'
import React from 'react'
import VerificationInput from 'react-verification-input'
import { z } from 'zod'
import { useRegisterCredentialsCase } from '@/application/useCases'
import { useAuthStoreLs } from '@/application/zustand/stores'
import { VerificationInputCasted } from '@/shared'
import { InputText } from '@/ui/atoms'
import FormState from '@/ui/atoms/formState'
import { FormField } from '@/ui/molecules'
import ForwardCodeCredentials from '../forwardCodeCredentials'
import { FormRegisterCredentialsVal } from './types'

const schema: z.ZodSchema<FormRegisterCredentialsVal> = z.object({
  code: z.string().min(1, 'Código es requerido'),
  email: z.string().email('Email inválido').min(1, 'Email es requerido'),
  firstName: z.string().min(1, 'Nombre es requerido'),
  lastName: z.string().min(1, 'Apellido es requerido'),
  password: z.string().min(1, 'Contraseña es requerida'),
})

const FormRegisterCredentials = () => {
  const { hasValidCode } = useAuthStoreLs()
  const { handleActionService } = useRegisterCredentialsCase()
  const onSubmit = (data: FormRegisterCredentialsVal) => {
    handleActionService(data)
  }

  return (
    <FormState
      defaultValues={{
        code: '',
        email: hasValidCode?.mail ?? '',
        firstName: '',
        lastName: '',
        password: '',
      }}
      schema={schema}
      onSubmit={onSubmit}
    >
      <FormField<FormRegisterCredentialsVal>
        component={InputText}
        label='Email: '
        placeholder='email'
        name='email'
      />
      <FormField<FormRegisterCredentialsVal>
        component={InputText}
        label='Contraseña: '
        placeholder='password'
        name='password'
        type='password'
      />
      <FormField<FormRegisterCredentialsVal>
        component={InputText}
        label='Nombre: '
        placeholder='firstName'
        name='firstName'
      />
      <FormField<FormRegisterCredentialsVal>
        component={InputText}
        label='Apellido: '
        placeholder='lastName'
        name='lastName'
      />
      <div className='flex flex-col gap-5 justify-center items-center'>
        <FormField<FormRegisterCredentialsVal>
          component={VerificationInput as VerificationInputCasted}
          name='code'
        />
        <ForwardCodeCredentials />
      </div>
      <button
        className='border border-gray-300 rounded-lg shadow-sm py-2 px-5'
        type='submit'
      >
        Enviar
      </button>
    </FormState>
  )
}

export default FormRegisterCredentials
