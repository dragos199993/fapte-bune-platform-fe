import React from 'react'
import { useForm } from 'react-hook-form'
import { LoginDto } from '../../../model/Login.dto'
import FormInput from '../../forms/FormInput'
import Link from 'next/link'
import { routes } from '../../../constants/routes'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginDto>()
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
          required: { message: 'Parola incorecta', value: true }
        })}
        errors={errors}
        label="Parola"
        name="password"
        type="password"
      />
      <div className="flex justify-between">
        <button
          className="bg-secondary block border-transparent border-2 text-light mx-1 py-2 px-4 rounded"
          type="submit"
        >
          Autentificare
        </button>
        <Link href={routes.AUTH_REGISTER}>
          <a
            className="border-secondary border-2 block mx-1 py-2 px-4 rounded text-dark dark:text-light"
            type="submit"
          >
            Nu ai cont?
          </a>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
