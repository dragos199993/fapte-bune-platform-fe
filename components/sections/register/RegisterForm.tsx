import React from 'react'
import { useForm } from 'react-hook-form'
import FormInput from '../../forms/FormInput'
import { RegisterDto } from '../../../model/Register.dto'
import { routes } from '../../../constants/routes'
import Link from 'next/link'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterDto>()
  const onSubmit = data => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl md:mx-auto mx-6 mt-16"
    >
      <FormInput
        registerProps={register('email', {
          required: { message: 'Email incorect', value: true }
        })}
        errors={errors}
        label="Adresa de email"
        name="email"
        type="email"
      />
      <FormInput
        registerProps={register('password', {
          required: { message: 'Parola trebuie completata', value: true }
        })}
        errors={errors}
        label="Parola"
        name="password"
        type="password"
      />
      <FormInput
        registerProps={register('password_confirm', {
          required: {
            message: 'Confirmarea parolei trebuie completata',
            value: true
          }
        })}
        errors={errors}
        label="Parola"
        name="password_confirm"
        type="password"
      />
      <div className="flex justify-between">
        <button
          className="bg-secondary block border-transparent border-2 text-light mx-1 py-2 px-4 rounded"
          type="submit"
        >
          Creeaza cont
        </button>
        <Link href={routes.AUTH_LOGIN}>
          <a
            className="border-secondary border-2 block mx-1 py-2 px-4 rounded text-dark dark:text-light"
            type="submit"
          >
            Ai deja cont?
          </a>
        </Link>
      </div>
    </form>
  )
}

export default RegisterForm
