'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Link from 'next/link'
import React from 'react'
import * as Yup from 'yup'
import { useLoginCredentialsCase } from '@/application/useCases'
import { clientRoutes } from '@/routes/clientRoutes'

const CredentialsPage = () => {
  const { handleActionService } = useLoginCredentialsCase()

  return (
    <div className='flex flex-col gap-10 my-5'>
      <h1 className='text-center text-3xl'>Pagina de Login con credenciales</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Correo invalido').required('Requerido'),
          password: Yup.string().required('Requerido'),
        })}
        onSubmit={values => {
          handleActionService(values)
        }}
      >
        <Form className='flex flex-col justify-center items-center gap-5'>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email:</label>
            <Field
              className='w-full px-4 py-2 border
              border-gray-300 rounded-lg shadow-sm
              focus:outline-none focus:ring-2 focus:ring-red-500
              focus:border-red-500 transition duration-200 placeholder-gray-400'
              type='text'
              id='email'
              name='email'
              placeholder='Enter your email'
            />
            <ErrorMessage
              name='email'
              component='div'
              className='text-red-500'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password'>Contraseña:</label>
            <Field
              className='w-full px-4 py-2 border
              border-gray-300 rounded-lg shadow-sm focus:outline-none
              focus:ring-2 focus:ring-red-500 focus:border-red-500
              transition duration-200 placeholder-gray-400'
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
            />
            <ErrorMessage
              name='password'
              component='div'
              className='text-red-500'
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
