import { Formik, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormField from '@/ui/molecules/fieldWrapper'

const CredentialsPage = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Email inválido').required('Requerido'),
        password: Yup.string()
          .min(6, 'Debe tener al menos 6 caracteres')
          .required('Requerido'),
      })}
      onSubmit={values => {
        alert('Valores enviados: ' + JSON.stringify(values))
      }}
    >
      <Form>
        <FormField
          label='Email'
          name='email'
          type='email'
          component='input'
          placeholder='Ingrese su email'
        />
        <FormField
          label='Contraseña'
          name='password'
          type='password'
          component='input'
          placeholder='Ingrese su contraseña'
        />
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  )
}

export default CredentialsPage
