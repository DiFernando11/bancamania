'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import VerificationInput from 'react-verification-input'
import * as Yup from 'yup'
import { useRegisterCredentialsCase } from '@/application/useCases'
import { useAuthStoreLs } from '@/application/zustand/stores'
import ForwardCodeCredentials from '../forwardCodeCredentials'

const FormRegisterCredentials = () => {
  const { hasValidCode } = useAuthStoreLs()
  const { handleActionService } = useRegisterCredentialsCase()
  const validationSchema = Yup.object({
    code: Yup.string().required('Código es requerido'),
    email: Yup.string().email('Email inválido').required('Email es requerido'),
    firstName: Yup.string().required('Nombre es requerido'),
    lastName: Yup.string().required('Apellido es requerido'),
    password: Yup.string().required('Contraseña es requerida'),
  })

  return (
    <Formik
      initialValues={{
        code: '',
        email: hasValidCode?.mail ?? '',
        firstName: '',
        lastName: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => handleActionService(values)}
    >
      {({ setFieldValue }) => (
        <Form className='flex flex-col gap-5 mx-5'>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email:</label>
            <Field
              className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 
              transition duration-200 placeholder-gray-400'
              type='text'
              id='email'
              name='email'
              disabled
            />
            <ErrorMessage
              name='email'
              component='span'
              className='text-red-500'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password'>Contraseña:</label>
            <Field
              className='w-full px-4 py-2 border border-gray-300 rounded-lg 
              shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 
              focus:border-red-500 transition duration-200 placeholder-gray-400'
              type='password'
              id='password'
              name='password'
            />
            <ErrorMessage
              name='password'
              component='span'
              className='text-red-500'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='firstName'>Nombre:</label>
            <Field
              className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 
              transition duration-200 placeholder-gray-400'
              type='text'
              id='firstName'
              name='firstName'
              placeholder={
                hasValidCode?.firstName
                  ? `sugerencia: ${hasValidCode?.firstName}`
                  : 'Ingresa tu nombre'
              }
            />
            <ErrorMessage
              name='firstName'
              component='span'
              className='text-red-500'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='lastName'>Apellido:</label>
            <Field
              className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 
              transition duration-200 placeholder-gray-400'
              type='text'
              id='lastName'
              name='lastName'
              placeholder={
                hasValidCode?.lastName
                  ? `sugerencia: ${hasValidCode?.lastName}`
                  : 'Ingresa tu apellido'
              }
            />
            <ErrorMessage
              name='lastName'
              component='span'
              className='text-red-500'
            />
          </div>
          <div className='flex flex-col gap-5 justify-center items-center'>
            <VerificationInput
              onChange={value => setFieldValue('code', value)}
            />
            <ForwardCodeCredentials />
          </div>
          <button
            className='border border-gray-300 rounded-lg shadow-sm py-2 px-5'
            type='submit'
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default FormRegisterCredentials
