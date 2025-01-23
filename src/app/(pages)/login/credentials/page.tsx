'use client'
import { Form, Formik } from 'formik'
import Link from 'next/link'
import React from 'react'
import * as Yup from 'yup'
import { useLoginCredentialsCase } from '@/application/useCases'
import { clientRoutes } from '@/routes/clientRoutes'
import FormField from '@/ui/molecules/fieldWrapper'

const CredentialsPage = () => {
  const InputElement: React.FC<
    React.InputHTMLAttributes<HTMLInputElement>
  > = props => {
    return (
      <input
        {...props}
        className='w-full px-4 py-2 border
     border-gray-300 rounded-lg shadow-sm
     focus:outline-none focus:ring-2 focus:ring-red-500
     focus:border-red-500 transition duration-200 placeholder-gray-400'
      />
    )
  }
  const { handleActionService } = useLoginCredentialsCase()

  return (
    <div className='flex flex-col gap-10 my-5'>
      <h1 className='text-center text-3xl'>Pagina de Login con credenciales</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Email inválido').required('Requerido'),
          password: Yup.string()
            .min(6, 'Debe tener al menos 6 caracteres')
            .required('Requerido'),
        })}
        onSubmit={values => {
          handleActionService(values)
        }}
      >
        <Form className='flex flex-col justify-center items-center gap-5'>
          <div className='flex flex-col'>
            <FormField
              name='email'
              component={InputElement}
              placeholder='Ingrese su email'
              label='Email'
            />
          </div>
          <div className='flex flex-col'>
            <FormField
              label='Contraseña'
              name='password'
              component={InputElement}
              placeholder='Ingrese su email'
            />
          </div>
          <button
            className='border border-gray-300 rounded-lg shadow-sm py-2 px-5'
            type='submit'
          >
            Enviar
          </button>
        </Form>
      </Formik>
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
